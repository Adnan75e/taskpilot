'use client';

import { Mail, Lock, ArrowRight, Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative min-h-screen max-w-md mx-auto flex flex-col px-6">
      <header className="flex items-center bg-transparent py-10 justify-center">
        <h2 className="text-[12px] font-bold tracking-[0.5em] uppercase text-purple-900/50">
          Smart Task
        </h2>
      </header>
      <main className="flex-1 flex flex-col justify-center">
        <div className="glass-card-main rounded-[2.5rem] p-8 pb-10 mb-10">
          <div className="mb-10 text-center">
            <h1 className="text-black tracking-tight text-[32px] font-extrabold">
              Login
            </h1>
            <p className="text-black/60 text-[15px] font-medium mt-2">
              Welcome back to your workspace
            </p>
          </div>
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-[14px] font-bold text-black/80 ml-1">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-black/60 !text-[20px]" />
                <input
                  className="glass-input w-full h-[60px] rounded-2xl pl-12 pr-4 text-black font-medium placeholder:text-black/30 border-none"
                  placeholder="name@company.com"
                  type="email"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[14px] font-bold text-black/80 ml-1">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-black/60 !text-[20px]" />
                <input
                  className="glass-input w-full h-[60px] rounded-2xl pl-12 pr-12 text-black font-medium placeholder:text-black/30 border-none"
                  placeholder="••••••••"
                  type={showPassword ? 'text' : 'password'}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-black/60 hover:text-black/80"
                >
                  {showPassword ? (
                    <EyeOff className="!text-[20px]" />
                  ) : (
                    <Eye className="!text-[20px]" />
                  )}
                </button>
              </div>
            </div>
            <div className="text-right">
              <a
                className="text-[13px] font-bold text-purple-900/70 hover:text-purple-900 transition-colors"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
            <button
              className="glass-btn w-full h-[64px] rounded-2xl text-black font-bold text-[18px] mt-4 flex items-center justify-center gap-2"
              type="submit"
            >
              Login
              <ArrowRight className="!text-[20px]" />
            </button>
          </form>
          <div className="mt-10 text-center">
            <p className="text-black/50 text-[14px] font-medium">
              {"Don't have an account?"}{' '}
              <Link
                href="#"
                className="text-black font-bold underline decoration-2 underline-offset-4"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </main>
      <div className="fixed -bottom-20 -left-20 w-64 h-64 bg-white/30 rounded-full blur-[80px] -z-10"></div>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-400/20 rounded-full blur-[100px] -z-10"></div>
      <div className="fixed -top-10 -right-10 w-48 h-48 bg-purple-300/30 rounded-full blur-[60px] -z-10"></div>
    </div>
  );
}
