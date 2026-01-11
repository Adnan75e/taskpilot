'use client';

import { Check, Bug, Database, Shield, Grid, Plus, User } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="relative flex min-h-screen max-w-md mx-auto flex-col overflow-x-hidden text-black">
      <header className="glass-header sticky top-0 z-50 px-6 py-8 flex flex-col items-center justify-center rounded-b-[2rem]">
        <span className="text-[10px] font-bold tracking-[0.4em] uppercase opacity-60 mb-1">
          Smart Task
        </span>
        <h2 className="text-2xl font-bold tracking-tight">Hello, Team!</h2>
      </header>
      <main className="flex-1 px-6 pt-8 pb-12">
        <div className="glass-card-3d rounded-[2.5rem] p-10 flex flex-col items-center justify-center text-center mb-10">
          <div className="w-24 h-24 bg-status-green rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(34,197,94,0.4)]">
            <Check className="text-white h-16 w-16" strokeWidth={3} />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight mb-2">
            Testing Done
          </h1>
          <p className="font-medium opacity-70">
            Quality assurance completed successfully
          </p>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between mb-4 px-2">
            <h3 className="text-lg font-bold">Completed Items</h3>
            <span className="text-xs font-bold opacity-60 uppercase tracking-wider">
              Today
            </span>
          </div>
          <div className="frosted-item rounded-3xl p-5 flex items-center gap-4">
            <div className="w-12 h-12 bg-black/5 rounded-2xl flex items-center justify-center">
              <Bug className="text-black" />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-base">UI Bug Regression</h4>
              <p className="text-sm opacity-60">Verified fix for login screen</p>
            </div>
            <Check className="text-status-green font-bold" />
          </div>
          <div className="frosted-item rounded-3xl p-5 flex items-center gap-4">
            <div className="w-12 h-12 bg-black/5 rounded-2xl flex items-center justify-center">
              <Database className="text-black" />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-base">API Stress Test</h4>
              <p className="text-sm opacity-60">Handled 10k concurrent req</p>
            </div>
            <Check className="text-status-green font-bold" />
          </div>
          <div className="frosted-item rounded-3xl p-5 flex items-center gap-4">
            <div className="w-12 h-12 bg-black/5 rounded-2xl flex items-center justify-center">
              <Shield className="text-black" />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-base">Security Audit</h4>
              <p className="text-sm opacity-60">All endpoints encrypted</p>
            </div>
            <Check className="text-status-green font-bold" />
          </div>
        </div>
      </main>
      <div className="fixed -bottom-20 -left-20 w-64 h-64 bg-white/30 rounded-full blur-[80px] -z-10"></div>
      <div className="fixed top-1/3 -right-20 w-80 h-80 bg-purple-400/20 rounded-full blur-[100px] -z-10"></div>
      <div className="fixed bottom-1/4 left-1/2 -translate-x-1/2 w-48 h-48 bg-white/10 rounded-full blur-[60px] -z-10"></div>
      <nav className="sticky bottom-0 w-full glass-header py-6 px-10 flex justify-between items-center rounded-t-[2rem]">
        <Grid className="text-black/80 font-bold scale-110" />
        <div className="bg-black text-white w-14 h-14 rounded-2xl flex items-center justify-center -mt-12 shadow-xl">
          <Plus />
        </div>
        <User className="text-black/80 font-bold scale-110" />
      </nav>
    </div>
  );
}
