import { simulateApiRequest } from '../services/apiSimulator';
import { HttpMethod, SimulatedResponse } from '../types';

export const handleApiRequest = async (
  method: HttpMethod,
  endpoint: string,
  requestBody: string
): Promise<SimulatedResponse> => {
  try {
    const response = await simulateApiRequest(method, endpoint, requestBody);
    return response;
  } catch (err) {
    return {
      status: 500,
      statusText: 'Simulator Crash',
      body: {
        is_success: false,
        error: 'A fatal error occurred within the simulator.',
      },
    };
  }
};
