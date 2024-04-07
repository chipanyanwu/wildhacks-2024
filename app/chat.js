'use client'


import React, { useState } from 'react';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: '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',
  dangerouslyAllowBrowser: true
});

const Chat = () => {
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (!userInput.trim()) return;
    const newMessages = [...messages, { role: 'user', content: userInput }];
    setMessages(newMessages);
    setUserInput('');

    try {
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: newMessages,
      });

      const reply = response.choices[0].message.content;
      setMessages([...newMessages, { role: 'assistant', content: reply }]);
    } catch (error) {
      console.error('Error fetching the response:', error);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto', backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
      <div>
        {messages.map((msg, index) => (
          <div key={index} style={{ 
            textAlign: msg.role === 'user' ? 'right' : 'left',
            margin: '10px 0',
            maxWidth: '70%',
            marginLeft: msg.role === 'user' ? '30%' : '0',
            marginRight: msg.role === 'user' ? '0' : '30%',
            padding: '10px',
            borderRadius: '10px',
            backgroundColor: msg.role === 'user' ? '#b2dffb' : '#e5e5e5',
            alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
          }}>
            {msg.content}
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          style={{
            flexGrow: 1,
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />
        <button onClick={sendMessage} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', borderRadius: '4px', backgroundColor: '#b2dffb'}}>Send</button>
      </div>
    </div>
  );
};

export default Chat;

