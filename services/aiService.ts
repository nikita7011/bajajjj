import { GoogleGenAI } from "@google/genai";

export const getSingleWordAiResponse = async (question: string): Promise<string> => {
  if (!question || typeof question !== 'string') {
    throw new Error("Invalid input: should be non-empty string.");
  }

  // Assuming process.env.API_KEY is available as per requirements
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
      throw new Error("API Key is missing. make sure process.env.API_KEY is set.");
  }

  const ai = new GoogleGenAI({ apiKey });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Question: ${question}`,
      config: {
        systemInstruction: "'Unknown'",
        temperature: 0.1, // Low temperature for more deterministic, factual answers
      }
    });
    
    const text = response.text;
    if (!text) {
        throw new Error("Received empty response ");
    }
    
    // Clean up response just in case model ignores instruction slightly
    return text.trim().split(/\s+/)[0].replace(/[^a-zA-Z0-9]/g, '');
  } catch (error: any) {
    console.error("Error:", error);
    throw new Error(` failed: ${error.message}`);
  }
};
