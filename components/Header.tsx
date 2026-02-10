import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="relative z-10 border-b border-cyan-500/20 backdrop-blur-md bg-black/40">
      <div className="px-6 py-6">
        <div className="flex justify-between items-start">
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-400 blur-xl opacity-50"></div>
                <h1 className="relative text-4xl font-black tracking-tighter bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  BFHL LABORATORY
                </h1>
              </div>
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse animation-delay-200"></div>
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse animation-delay-400"></div>
              </div>
            </div>
            <p className="text-cyan-300/70 text-sm font-light tracking-wide uppercase">
              Advanced API Testing Environment — Quantum Simulation Active
            </p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className="px-4 py-2 rounded-lg border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm">
              <div className="text-xs text-cyan-400 font-mono uppercase tracking-wider">System Status</div>
              <div className="text-xs text-gray-400 font-mono mt-1 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                All Systems Operational
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
