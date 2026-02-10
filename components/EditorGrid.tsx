import React from 'react';
import { Editor } from './Editor';
import { SimulatedResponse, HttpMethod } from '../types';

interface EditorGridProps {
  method: HttpMethod;
  requestBody: string;
  isValidJson: boolean;
  response: SimulatedResponse | null;
  onRequestBodyChange: (value: string) => void;
}

export const EditorGrid: React.FC<EditorGridProps> = ({
  method,
  requestBody,
  isValidJson,
  response,
  onRequestBodyChange,
}) => {
  return (
    <div className="flex flex-col lg:flex-row flex-1 gap-6 min-h-0">
      {/* Request Body */}
      <div className="flex-1 flex flex-col min-h-0">
        <div className="mb-3 flex justify-between items-center px-1">
          <div className="flex items-center gap-3">
            <div className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full"></div>
            <h3 className="font-bold text-lg text-gray-200 tracking-tight">Request Payload</h3>
          </div>
          {method === HttpMethod.GET && (
            <span className="text-xs text-gray-500 font-mono px-3 py-1 bg-gray-800/50 rounded-full border border-gray-700/50">
              N/A for GET
            </span>
          )}
          {method === HttpMethod.POST && !isValidJson && (
            <span className="text-xs text-red-400 font-mono px-3 py-1 bg-red-500/10 rounded-full border border-red-500/30 animate-pulse">
              Invalid JSON
            </span>
          )}
        </div>
        <div
          className={`flex-1 min-h-0 rounded-xl border transition-all duration-300 ${
            method === HttpMethod.GET
              ? 'opacity-40 border-gray-700/30 pointer-events-none'
              : isValidJson
                ? 'border-cyan-500/30 shadow-lg shadow-cyan-500/5'
                : 'border-red-500/30 shadow-lg shadow-red-500/10'
          } overflow-hidden backdrop-blur-sm bg-gray-900/30`}
        >
          <Editor title="JSON" value={requestBody} onChange={onRequestBodyChange} isValid={isValidJson} />
        </div>
      </div>

      {/* Response Body */}
      <div className="flex-1 flex flex-col min-h-0">
        <div className="mb-3 flex justify-between items-center px-1">
          <div className="flex items-center gap-3">
            <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full"></div>
            <h3 className="font-bold text-lg text-gray-200 tracking-tight">Response Data</h3>
          </div>
          {response && (
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-400 font-mono uppercase tracking-wider">Status</span>
              <span
                className={`text-xs font-bold px-4 py-1.5 rounded-full font-mono border ${
                  response.status >= 200 && response.status < 300
                    ? 'bg-green-500/10 text-green-400 border-green-500/30 shadow-lg shadow-green-500/20'
                    : 'bg-red-500/10 text-red-400 border-red-500/30 shadow-lg shadow-red-500/20'
                }`}
              >
                {response.status} {response.statusText}
              </span>
            </div>
          )}
        </div>
        <div
          className={`flex-1 min-h-0 rounded-xl border transition-all duration-300 ${
            response
              ? response.status >= 200 && response.status < 300
                ? 'border-green-500/30 shadow-lg shadow-green-500/5'
                : 'border-red-500/30 shadow-lg shadow-red-500/5'
              : 'border-purple-500/30'
          } overflow-hidden backdrop-blur-sm bg-gray-900/30`}
        >
          <Editor
            title={response ? 'Response JSON' : 'Awaiting transmission...'}
            value={response ? JSON.stringify(response.body, null, 2) : ''}
            readOnly
          />
        </div>
      </div>
    </div>
  );
};
