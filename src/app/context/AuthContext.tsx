'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase, getSession, getCurrentUser } from '../utils/supabase';

type AuthContextType = {
  user: User | null;
  session: Session | null;
  isLoading: boolean;
  isAdmin: boolean;
  schoolId: string | null;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  isLoading: true,
  isAdmin: false,
  schoolId: null,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [schoolId, setSchoolId] = useState<string | null>(null);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        // Get current session
        const currentSession = await getSession();
        setSession(currentSession);

        // Get user
        if (currentSession) {
          const currentUser = await getCurrentUser();
          setUser(currentUser);

          // Check if user is admin
          if (currentUser?.user_metadata?.role === 'admin') {
            setIsAdmin(true);
          } else if (currentUser?.user_metadata?.school_id) {
            setSchoolId(currentUser.user_metadata.school_id);
          }
        }
      } catch (error) {
        console.error('Error loading authentication:', error);
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();

    // Set up auth state listener
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, currentSession) => {
        setSession(currentSession);
        const currentUser = currentSession ? await getCurrentUser() : null;
        setUser(currentUser);

        if (currentUser?.user_metadata?.role === 'admin') {
          setIsAdmin(true);
        } else if (currentUser?.user_metadata?.school_id) {
          setSchoolId(currentUser.user_metadata.school_id);
        } else {
          setIsAdmin(false);
          setSchoolId(null);
        }
      }
    );

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, session, isLoading, isAdmin, schoolId }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 