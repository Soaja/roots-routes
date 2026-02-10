import { GoogleGenAI } from "@google/genai";

// Initialize the Gemini client following strict guidelines:
// - Always use `const ai = new GoogleGenAI({apiKey: process.env.API_KEY});`.
// - The API key must be obtained exclusively from `process.env.API_KEY`.
// - Assume this variable is pre-configured, valid, and accessible.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Example function to generate a travel itinerary for Sicily based on user preferences.
 * This is a placeholder for future AI integration.
 */
export const generateItinerary = async (preferences: string): Promise<string | undefined> => {
  try {
    const model = 'gemini-3-flash-preview'; 
    const response = await ai.models.generateContent({
      model,
      contents: `Generate a 3-day luxury itinerary for Sicily based on: ${preferences}`,
      config: {
        systemInstruction: "You are a luxury travel concierge for Roots&Routes.",
      }
    });

    return response.text;
  } catch (error) {
    console.error("Error generating itinerary:", error);
    return undefined;
  }
};