import React from 'react';
import { HttpMethod } from '../types';
import { API_ENDPOINTS } from '../constants/endpoints';

interface RequestBarProps {
  method: HttpMethod;
  endpoint: string;
  isLoading: boolean;
  isValidJson: boolean;
  onMethodChange: (method: HttpMethod) => void;
  onSend: () => void;
}

export const RequestBar: React.FC<RequestBarProps> = ({
  method,
  endpoint,
  isLoading,
  isValidJson,
  onMethodChange,
  onSend,
}) => {
  return (
    <div className="flex gap-3 items-start">
      <div className="flex-1 max-w-3xl">
        <div className="flex bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-xl shadow-2xl shadow-cyan-500/10 overflow-hidden">
          <select
            value={method}
            onChange={(e) => onMethodChange(e.target.value as HttpMethod)}
            className={`px-6 py-4 bg-gray-800/80 font-mono font-bold outline-none border-r border-cyan-500/30 appearance-none cursor-pointer transition-colors ${
              method === 'GET' ? 'text-green-400' : 'text-blue-400'
            }`}
          >
            <option value={HttpMethod.GET}>GET</option>
            <option value={HttpMethod.POST}>POST</option>
          </select>
          <input
            type="text"
            value={`${API_ENDPOINTS.BASE_URL}${endpoint}`}
            readOnly
            className="flex-1 px-6 py-4 text-gray-300 font-mono bg-transparent outline-none"
          />
        </div>
      </div>

      <button
        onClick={onSend}
        disabled={isLoading || (!isValidJson && method !== HttpMethod.GET)}
        className="relative px-8 py-4 font-bold rounded-xl overflow-hidden transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
      >
        <div
          className={`absolute inset-0 bg-gradient-to-r ${
            isLoading
              ? 'from-purple-600 via-pink-600 to-purple-600 animate-gradient'
              : 'from-cyan-500 via-purple-500 to-pink-500'
          } transition-all`}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 blur transition-opacity"></div>
        <div className="relative z-10 flex items-center gap-3">
          {isLoading ? (
            <>
              <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
              <span>PROCESSING</span>
            </>
          ) : (
            <>
              <span>EXECUTE</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </>
          )}
        </div>
      </button>
    </div>
  );
};
