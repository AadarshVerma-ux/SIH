import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [messages, setMessages] = useState([{ text: 'Hi! How can I help you today?', sender: 'bot' }]);
  const [input, setInput] = useState('');
  const [isSending, setIsSending] = useState(false); 

  const handleSend = async () => {
    if (input.trim() === '' || isSending) return;

    const userMessage = { text: input, sender: 'user' };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput(''); 
    setIsSending(true);

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo', 
          messages: [{ role: 'user', content: input }],
        },
        {
          headers: {
            'Authorization': `Bearer`, 
            'Content-Type': 'application/json',
          },
        }
      );

      const botMessage = { text: response.data.choices[0].message.content, sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      if (error.response && error.response.status === 429) {
        console.error('Rate limit exceeded. Please wait a moment before trying again.');
        const errorMessage = { text: 'Rate limit exceeded. Please try again later.', sender: 'bot' };
        setMessages((prevMessages) => [...prevMessages, errorMessage]);
      } else {
        console.error('An error occurred:', error);
        const errorMessage = { text: 'An error occurred. Please try again later.', sender: 'bot' };
        setMessages((prevMessages) => [...prevMessages, errorMessage]);
      }
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="chatbot-container p-4 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <div className="chat-messages h-80 overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message mb-2 p-2 rounded-lg ${
              msg.sender === 'bot' ? 'bg-blue-100 text-left' : 'bg-green-100 text-right'
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input mt-4 flex">
        <input
          className="flex-grow p-2 border rounded-l-lg focus:outline-none"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          disabled={isSending} 
        />
        <button
          className="p-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-700"
          onClick={handleSend}
          disabled={isSending} 
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
