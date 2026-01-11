import { ChevronRight, LogIn, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function WelcomePage() {
  return (
    <div className="relative flex h-screen max-w-md mx-auto flex-col overflow-x-hidden">
      <header className="flex items-center bg-transparent p-4 pb-2 justify-center pt-12">
        <h2 className="text-[14px] font-bold tracking-[0.4em] uppercase text-purple-900/60">
          Smart Task
        </h2>
      </header>
      <main className="flex-1 flex flex-col justify-start pt-14 px-8">
        <div className="mb-14 text-center">
          <h1 className="text-gray-900 tracking-tight text-[44px] font-bold leading-[1.1] pb-5">
            Welcome to <br />
            Smart Task
          </h1>
          <p className="text-gray-800/80 text-[18px] font-medium leading-relaxed px-4">
            Access your workspace or join your organization.
          </p>
        </div>
        <div className="flex flex-col gap-10">
          <button className="glass-card group flex items-center p-7 rounded-3xl text-left">
            <div className="w-[68px] h-[68px] rounded-2xl glass-icon-container flex items-center justify-center mr-5">
              <LogIn className="!text-[36px] text-black" />
            </div>
            <div className="flex-1">
              <h3 className="text-[20px] font-bold text-black mb-1 tracking-tight">
                Login
              </h3>
              <p className="text-black/70 text-[15px] leading-snug font-medium">
                Continue your work session.
              </p>
            </div>
            <ChevronRight className="text-black/40 !text-2xl ml-2" />
          </button>
          <button className="glass-card group flex items-center p-7 rounded-3xl text-left">
            <div className="w-[68px] h-[68px] rounded-2xl glass-icon-container flex items-center justify-center mr-5">
              <UserPlus className="!text-[36px] text-black" />
            </div>
            <div className="flex-1">
              <h3 className="text-[20px] font-bold text-black mb-1 tracking-tight">
                Sign Up
              </h3>
              <p className="text-black/70 text-[15px] leading-snug font-medium">
                Create a new workspace.
              </p>
            </div>
            <ChevronRight className="text-black/40 !text-2xl ml-2" />
          </button>
        </div>
      </main>
      <div className="fixed -bottom-20 -left-20 w-64 h-64 bg-white/30 rounded-full blur-[80px] -z-10"></div>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-400/10 rounded-full blur-[100px] -z-10"></div>
    </div>
  );
}
