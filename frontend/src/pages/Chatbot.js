import React, { useState } from 'react';
import axios from 'axios';

function Chatbot() {
  const [message, setMessage] = useState('');
  const [responses, setResponses] = useState([]);

  const sendMessage = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/chatbot', { message });
      setResponses([...responses, { user: message, bot: response.data.response }]);
      setMessage('');
    } catch (error) {
      console.error('Error sending message to chatbot:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-4">Chat with AI</h2>
      <div className="bg-white p-4 rounded shadow-md mb-6">
        {responses.map((res, index) => (
          <div key={index} className="mb-4">
            <p><strong>You:</strong> {res.user}</p>
            <p><strong>Bot:</strong> {res.bot}</p>
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage} className="flex">
        <input 
          type="text" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          placeholder="Type your message" 
          className="flex-grow p-2 border rounded-l-lg"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 rounded-r-lg">
          Send
        </button>
      </form>
    </div>
  );
}

export default Chatbot;
