import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyC8qVUpiOXV-g4KpqlSOgfsFYbOIMbG610");

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function runChat(message) {
  const chat = model.startChat({
    history: [
      {
        role: "user",
        parts: [{ text: "Hello, who are you?" }],
      },
      {
        role: "model",
        parts: [{ text: "I’m Gemini, a Google AI model. How can I help you?" }],
      },
    ],
  });

  const result = await chat.sendMessage(message);
  console.log(result.response.text());
}

export default runChat;
