import React, { useCallback } from 'react';
import { HttpMethod } from './types';
import { EXAMPLES } from './constants/examples';
import { useRequestState } from './hooks/useRequestState';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { RequestBar } from './components/RequestBar';
import { EditorGrid } from './components/EditorGrid';
import { InfoBanner } from './components/InfoBanner';
import { AnimatedBackground } from './components/AnimatedBackground';
import { handleApiRequest } from './utils/requestHandler';
import { APP_STYLES } from './utils/styleConstants';

const App: React.FC = () => {
  const {
    method,
    setMethod,
    endpoint,
    setEndpoint,
    requestBody,
    setRequestBody,
    response,
    setResponse,
    isLoading,
    setIsLoading,
    particleKey,
    isValidJson,
    incrementParticleKey,
  } = useRequestState();

  const handleSend = useCallback(async () => {
    setIsLoading(true);
    setResponse(null);
    incrementParticleKey();
    const res = await handleApiRequest(method, endpoint, requestBody);
    setResponse(res);
    setIsLoading(false);
  }, [method, endpoint, requestBody, setIsLoading, setResponse, incrementParticleKey]);

  const handleExampleSelect = (exKey: string) => {
    setMethod(HttpMethod.POST);
    setEndpoint('/bfhl');
    setRequestBody(EXAMPLES[exKey]);
  };

  const handleHealthCheck = () => {
    setMethod(HttpMethod.GET);
    setEndpoint('/health');
    setRequestBody('');
  };

  return (
    <div className="flex flex-col h-full bg-black text-gray-100 relative overflow-hidden">
      <AnimatedBackground />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden relative z-10">
        {/* Sidebar */}
        <Sidebar
          method={method}
          endpoint={endpoint}
          particleKey={particleKey}
          onHealthCheck={handleHealthCheck}
          onExampleSelect={handleExampleSelect}
        />

        {/* Workspace */}
        <main className="flex-1 flex flex-col p-6 overflow-hidden gap-6">
          {/* Request Bar */}
          <RequestBar
            method={method}
            endpoint={endpoint}
            isLoading={isLoading}
            isValidJson={isValidJson}
            onMethodChange={setMethod}
            onSend={handleSend}
          />

          {/* Editors Grid */}
          <EditorGrid
            method={method}
            requestBody={requestBody}
            isValidJson={isValidJson}
            response={response}
            onRequestBodyChange={setRequestBody}
          />

          {/* Info Banner */}
          <InfoBanner />
        </main>
      </div>

      <style>{APP_STYLES}</style>
    </div>
  );
};

export default App;
