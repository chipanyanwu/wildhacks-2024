// At the top of your file, import OpenAI
//import { model } from "mongoose";
const {  OpenAI } = require("openai");


//import OpenAI from "openai";


const openai = new OpenAI({
  apiKey: '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',
  dangerouslyAllowBrowser: true 
});

async function splitTask(description) {
  const completion = await openai.chat.completions.create({
    messages: [{"role": "system", "content": "You are a helpful assistant that helps students break their assignments into actionable sub-tasks."},
        {"role": "user", "content": "I have an assignment due next week. Can you help me break it down into smaller tasks?Give me just bullet points in a JSON"},
        {"role": "assistant", "content": "Sure, I will help you break this down into simpler tasks. Can you provide me with the assignment description?"},
        {"role": "user", "content": description}],
    model: "gpt-3.5-turbo"
  });

  console.log(completion.choices[0].message.content);
  return completion.choices[0].message.content.tasks;
}

//splitTask("how to build a house");

module.exports = splitTask;


//let openai;
/*
async function loadOpenAI() {
  if (!openai) {
    const OpenAI = await import('openai');
    openai = new OpenAI.OpenAIApi(new OpenAI.Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    }));
  }
}



const api = new OpenAI({
  apiKey : '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'

})



const example = "How many pounds are in a kilogram?";

const runPrompt = async (prompt) => {
    prompt = prompt.trim();

    const response = await api.Completion.create({
        engine: "text-davinci-003",
        prompt: prompt,
        max_tokens: 100,
        n: 1,
        stop: ["\n"]
    });
    console.log(response.data.choices[0].text);

  }

runPrompt(example);


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
*/