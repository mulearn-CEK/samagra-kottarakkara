'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAdmin?: boolean;
}

export default function ProtectedRoute({ children, requireAdmin = false }: ProtectedRouteProps) {
  const router = useRouter();
  const { user, isAdmin, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading) {
      if (!user) {
        // If not authenticated, redirect to login
        router.push('/desire2025/login');
      } else if (requireAdmin && !isAdmin) {
        // If admin access is required but user is not admin
        router.push('/desire2025/school/dashboard');
      }
    }
  }, [user, isAdmin, isLoading, router, requireAdmin]);

  // Show loading indicator while checking authentication
  if (isLoading || !user || (requireAdmin && !isAdmin)) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center p-4">
        <div className="w-16 h-16 border-t-4 border-sage-500 border-solid rounded-full animate-spin"></div>
        <p className="mt-4 text-sage-600">Loading...</p>
      </div>
    );
  }

  return <>{children}</>;
} 