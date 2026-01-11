'use client';

import { useUser, useAuth } from '@/firebase';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { signOut } from 'firebase/auth';

export default function DashboardPage() {
  const { user, isUserLoading } = useUser();
  const auth = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isUserLoading && !user) {
      router.push('/login');
    }
  }, [user, isUserLoading, router]);

  const handleLogout = () => {
    if (auth) {
      signOut(auth);
    }
  };

  if (isUserLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    );
  }

  if (!user) {
    return null; // Or a message encouraging login
  }

  return (
    <div className="relative flex h-screen max-w-md mx-auto flex-col overflow-x-hidden">
        <header className="flex items-center bg-transparent p-4 pb-2 justify-center pt-12">
            <h2 className="text-[14px] font-bold tracking-[0.4em] uppercase text-purple-900/60">
            Smart Task
            </h2>
        </header>
        <main className="flex-1 flex flex-col justify-center items-center px-8 text-center">
            <h1 className="text-gray-900 tracking-tight text-[44px] font-bold leading-[1.1] pb-5">
                Welcome!
            </h1>
            <p className="text-gray-800/80 text-[18px] font-medium leading-relaxed px-4 mb-8">
                You are logged in as {user.email}.
            </p>
            <Button onClick={handleLogout} className="glass-btn w-full max-w-xs h-[50px] rounded-2xl text-black font-bold text-[16px]">
                Log Out
            </Button>
        </main>
    </div>
  );
}
