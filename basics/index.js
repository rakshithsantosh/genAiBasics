const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function run() {
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
  const prompt = " write a story abount reactjs for beginners";
  const result = await model.generateContent(prompt);

  const response = await result.response;
  const text = response.text();

  console.log(text);
}

run();
