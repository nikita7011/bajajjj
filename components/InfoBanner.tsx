import React from 'react';

export const InfoBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden rounded-xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 backdrop-blur-sm">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 animate-shimmer"></div>
      <div className="relative p-4 flex gap-4 items-start">
        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
          <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>
        <div className="flex-1">
          <div className="text-sm font-bold text-cyan-300 mb-1">AI Endpoint Configuration</div>
          <p className="text-xs text-gray-400 leading-relaxed">
            The AI endpoint requires <code className="px-2 py-0.5 bg-gray-800/50 border border-gray-700/50 rounded text-cyan-400 font-mono">process.env.API_KEY</code> to be configured in the runtime environment. Authentication is handled automatically in production systems.
          </p>
        </div>
      </div>
    </div>
  );
};
