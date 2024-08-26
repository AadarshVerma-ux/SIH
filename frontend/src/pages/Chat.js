import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

function Chat() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = (e) => {
    e.preventDefault();
    socket.emit('sendMessage', message);
    setMessage('');
  };

  useEffect(() => {
    socket.on('receiveMessage', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
    return () => socket.off('receiveMessage');
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Chat with Friends</h2>
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-4">
        <div className="h-64 overflow-y-auto mb-4 bg-gray-50 p-2 rounded-lg">
          {messages.map((msg, index) => (
            <p key={index} className="mb-2 p-2 bg-blue-100 rounded-md text-gray-800">
              {msg}
            </p>
          ))}
        </div>
        <form onSubmit={sendMessage} className="flex items-center">
          <input 
            type="text" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            placeholder="Type your message" 
            className="flex-1 border border-gray-300 rounded-lg p-2 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button 
            type="submit" 
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
