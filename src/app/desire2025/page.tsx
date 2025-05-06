'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';

export default function Desire2025Page() {
  const router = useRouter();
  const { user, isAdmin, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading) {
      if (!user) {
        // If not authenticated, redirect to login
        router.push('/desire2025/login');
      } else if (isAdmin) {
        // If admin, redirect to admin dashboard
        router.push('/desire2025/admin/dashboard');
      } else {
        // If school user, redirect to school dashboard
        router.push('/desire2025/school/dashboard');
      }
    }
  }, [user, isAdmin, isLoading, router]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4">
      <div className="w-16 h-16 border-t-4 border-sage-500 border-solid rounded-full animate-spin"></div>
      <p className="mt-4 text-sage-600">Redirecting...</p>
    </div>
  );
} 