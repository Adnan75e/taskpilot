'use client';

import Link from 'next/link';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useAuth, useUser } from '@/firebase';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const GoogleIcon = () => (
  <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    ></path>
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    ></path>
    <path
      d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z"
      fill="#FBBC05"
    ></path>
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    ></path>
  </svg>
);

export default function SignUpPage() {
  const auth = useAuth();
  const { user, isUserLoading } = useUser();
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    if (!auth) return;
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      // The onAuthStateChanged listener in FirebaseProvider will handle the redirect
    } catch (error) {
      console.error('Google Sign-In Error:', error);
      // Optionally: show a toast notification to the user
    }
  };

  useEffect(() => {
    if (!isUserLoading && user) {
      router.push('/dashboard');
    }
  }, [user, isUserLoading, router]);

  return (
    <div className="relative flex min-h-screen max-w-md mx-auto flex-col overflow-x-hidden px-6">
      <style jsx global>{`
        .google-btn {
            background: rgba(255, 255, 255, 0.9);
            box-shadow: 0 15px 30px -5px rgba(109, 40, 217, 0.2);
            transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .google-btn:active {
            transform: translateY(2px) scale(0.98);
            box-shadow: 0 5px 15px -5px rgba(109, 40, 217, 0.3);
        }
        .glass-card {
            background: rgba(255, 255, 255, 0.25);
            backdrop-filter: blur(25px);
            -webkit-backdrop-filter: blur(25px);
            box-shadow: 
                0 30px 60px -12px rgba(0, 0, 0, 0.25),
                0 18px 36px -18px rgba(0, 0, 0, 0.3),
                inset 0 1px 1px rgba(255, 255, 255, 0.7);
            border-top: 1px solid rgba(255, 255, 255, 0.8);
            border-left: 1px solid rgba(255, 255, 255, 0.5);
            border-right: 1px solid rgba(255, 255, 255, 0.2);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>
      <header className="flex items-center bg-transparent pt-12 pb-8 justify-center">
        <h2 className="text-[14px] font-bold tracking-[0.4em] uppercase text-purple-900/60">
          Smart Task
        </h2>
      </header>
      <main className="flex-1 flex flex-col justify-center pb-12">
        <div className="mb-8 text-center">
          <h1 className="text-gray-900 tracking-tight text-[36px] font-bold leading-tight pb-2">
            Create Account
          </h1>
          <p className="text-gray-800/70 text-[16px] font-medium leading-relaxed">
            Join your team and start managing tasks efficiently.
          </p>
        </div>
        <div className="glass-card rounded-[2.5rem] p-8 flex flex-col gap-6">
          <button 
            onClick={handleGoogleSignIn}
            className="google-btn w-full py-5 rounded-2xl flex items-center justify-center gap-3 text-black font-bold text-lg tracking-tight"
            disabled={isUserLoading}
          >
            <GoogleIcon />
            Continue with Google
          </button>
          <div className="text-center">
            <p className="text-black/60 text-sm font-medium">
              Already have an account?{' '}
              <Link
                className="text-black font-bold hover:underline decoration-2 underline-offset-4 ml-1"
                href="/login"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </main>
      <div className="fixed -bottom-20 -left-20 w-64 h-64 bg-white/30 rounded-full blur-[80px] -z-10"></div>
      <div className="fixed top-1/3 -right-20 w-80 h-80 bg-purple-400/20 rounded-full blur-[100px] -z-10"></div>
      <div className="fixed bottom-1/4 left-1/2 -translate-x-1/2 w-48 h-48 bg-white/10 rounded-full blur-[60px] -z-10"></div>
    </div>
  );
}
