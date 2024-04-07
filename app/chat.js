'use client'


import React, { useState } from 'react';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: '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',
  dangerouslyAllowBrowser: true
});

const Chat = () => {
  const [taskInput, setTaskInput] = useState('');
  const [todos, setTodos] = useState([]);

  const generateToDoList = async (description) => {
    try {
      const response = await openai.chat.completions.create({ // Make sure this matches the method provided by the OpenAI package
        model: "gpt-3.5-turbo",
        prompt: `Create a to-do list for the task: ${description}`,
        max_tokens: 200,
      });
      console.log(response);

      const toDoList = response.data.choices[0].text.trim().split('\n').filter(item => item);
      setTodos([...todos, { task: description, subTasks: toDoList }]);
    } catch (error) {
      console.error('Error generating to-do list:', error);
    }
  };

  const handleAddTask = async () => {
    if (!taskInput.trim()) return;
    await generateToDoList(taskInput);
    setTaskInput('');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Enter a task..."
        style={{ flexGrow: 1, padding: '10px', fontSize: '16px', border: '1px solid #ccc' }}
      />
      <button onClick={handleAddTask} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Generate To-Do List
      </button>
      <div>
        {todos.map((todo, index) => (
          <div key={index} style={{ margin: '10px 0', padding: '10px', border: '1px solid #ccc' }}>
            <strong>{todo.task}</strong>
            <ul>
              {todo.subTasks.map((subTask, subIndex) => (
                <li key={subIndex}>{subTask}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chat;