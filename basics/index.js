import {
  GoogleGenAI,
  createUserContent,
  createPartFromUri,
} from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function textTotext() {
  const response = await genAI.models.generateContent({
    model: "gemini-2.0-flash",
    contents: "can you review sona comstar",
  });
  console.log(response.text);
}

await textTotext();
