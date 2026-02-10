import { useState, useCallback, useMemo } from 'react';
import { HttpMethod, SimulatedResponse } from '../types';
import { EXAMPLES } from '../constants/examples';

export const useRequestState = () => {
  const [method, setMethod] = useState<HttpMethod>(HttpMethod.POST);
  const [endpoint, setEndpoint] = useState<string>('/bfhl');
  const [requestBody, setRequestBody] = useState<string>(EXAMPLES['fibonacci']);
  const [response, setResponse] = useState<SimulatedResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [particleKey, setParticleKey] = useState(0);

  const isValidJson = useMemo(() => {
    if (method === HttpMethod.GET) return true;
    try {
      JSON.parse(requestBody);
      return true;
    } catch (e) {
      return false;
    }
  }, [requestBody, method]);

  const resetResponse = useCallback(() => {
    setResponse(null);
  }, []);

  const incrementParticleKey = useCallback(() => {
    setParticleKey(prev => prev + 1);
  }, []);

  return {
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
    resetResponse,
    incrementParticleKey,
  };
};
