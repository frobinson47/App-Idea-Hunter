
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });
const model = 'gemini-2.5-flash';

export const getAppIdeas = async (promptPrefix: string, userInput: string): Promise<string> => {
  try {
    const fullPrompt = promptPrefix.replace('{{USER_INPUT}}', userInput);
    
    const response = await ai.models.generateContent({
      model: model,
      contents: fullPrompt,
      config: {
        temperature: 0.7,
        topP: 0.95,
      }
    });

    if (response.text) {
      return response.text;
    }
    
    return "No ideas generated. Try a different query.";

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    if (error instanceof Error) {
        return `An error occurred while generating ideas: ${error.message}`;
    }
    return "An unknown error occurred while generating ideas.";
  }
};
