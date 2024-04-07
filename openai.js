// At the top of your file, import OpenAI
import { model } from "mongoose";
import { Configuration, OpenAIApi } from "openai";

let openai;

async function loadOpenAI() {
  if (!openai) {
    const OpenAI = await import('openai');
    openai = new OpenAI.OpenAIApi(new OpenAI.Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    }));
  }
}



const getSubTasksFromDescription = async (description) => {
  try {
    loadOpenAI();
    const response = await openai.createCompletion({
      model: "gpt-3.5-turbo", // Or the latest available model
      prompt: `Given the following project description, break it down into actionable sub-tasks:\n\n${description}\n\nSub-tasks:`,
      temperature: 0.5,
      max_tokens: 1024,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });
    return response.data.choices[0].text.trim().split('\n').filter(task => task.length > 0);
  } catch (error) {
    console.error("Error in generating sub-tasks:", error);
    return [];
  }
};

module.exports = getSubTasksFromDescription;
