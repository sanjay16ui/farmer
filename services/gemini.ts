import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const askAgriTechAI = async (prompt: string): Promise<string> => {
  if (!apiKey) {
    return "API Key is missing. Please configure the environment.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: `You are AgriTech AI, an advanced agricultural intelligence assistant. 
        Your tone is professional, scientific, yet accessible. 
        You help farmers with crop diseases, market trends, and irrigation advice.
        You help consumers understand food transparency and traceability.
        Keep answers concise (under 100 words) and structured.`,
      }
    });

    return response.text || "I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "An error occurred while connecting to the AgriTech Intelligence network.";
  }
};
