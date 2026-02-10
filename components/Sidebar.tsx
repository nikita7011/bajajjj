import React from 'react';
import { HttpMethod } from '../types';
import { EXAMPLES } from '../constants/examples';

interface SidebarProps {
  method: HttpMethod;
  endpoint: string;
  particleKey: number;
  onHealthCheck: () => void;
  onExampleSelect: (key: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  method,
  endpoint,
  particleKey,
  onHealthCheck,
  onExampleSelect,
}) => {
  return (
    <aside className="w-72 border-r border-cyan-500/20 backdrop-blur-md bg-black/20 overflow-y-auto hidden md:block flex-shrink-0">
      <div className="p-6 space-y-8">
        {/* Endpoints Section */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
            <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Endpoints</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
          </div>
          <div className="space-y-2">
            <button
              onClick={onHealthCheck}
              className={`group w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 relative overflow-hidden ${
                method === HttpMethod.GET && endpoint === '/health'
                  ? 'bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-400/50 shadow-lg shadow-green-500/20'
                  : 'border border-gray-700/50 hover:border-cyan-500/50 hover:bg-gray-800/30'
              }`}
            >
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-green-400 font-mono text-xs font-bold px-2 py-1 bg-green-500/10 rounded">
                    GET
                  </span>
                  <span className="text-gray-300 font-mono">/health</span>
                </div>
                <svg
                  className="w-4 h-4 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </div>
            </button>

            <button
              onClick={() => onExampleSelect('fibonacci')}
              className={`group w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 relative overflow-hidden ${
                method === HttpMethod.POST && endpoint === '/bfhl'
                  ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/50 shadow-lg shadow-blue-500/20'
                  : 'border border-gray-700/50 hover:border-cyan-500/50 hover:bg-gray-800/30'
              }`}
            >
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-blue-400 font-mono text-xs font-bold px-2 py-1 bg-blue-500/10 rounded">
                    POST
                  </span>
                  <span className="text-gray-300 font-mono">/bfhl</span>
                </div>
                <svg
                  className="w-4 h-4 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* Examples Section */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
            <h2 className="text-xs font-bold text-purple-400 uppercase tracking-widest">Test Cases</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
          </div>
          <div className="space-y-1.5">
            {Object.keys(EXAMPLES).map((key, index) => (
              <button
                key={key}
                onClick={() => onExampleSelect(key)}
                className="group w-full text-left px-4 py-2.5 rounded-lg text-sm transition-all duration-200 border border-transparent hover:border-purple-500/30 hover:bg-purple-500/5 relative overflow-hidden"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-gray-300 group-hover:text-purple-300 transition-colors">{key}</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400/50 group-hover:bg-purple-400 transition-colors"></div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Stats Display */}
        <div className="p-4 rounded-lg border border-pink-500/20 bg-gradient-to-br from-pink-500/5 to-purple-500/5">
          <div className="text-xs text-pink-400 font-mono uppercase tracking-wider mb-3">Session Stats</div>
          <div className="space-y-2 text-xs font-mono">
            <div className="flex justify-between text-gray-400">
              <span>Requests Sent</span>
              <span className="text-pink-400">{particleKey}</span>
            </div>
            <div className="flex justify-between text-gray-400">
              <span>Active Endpoint</span>
              <span className="text-cyan-400">{endpoint}</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
