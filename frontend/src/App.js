import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Chat from './pages/Chat';
import Chatbot from './pages/Chatbot';
import SignupLoginForm from './pages/SignupLoginForm';
import "./output.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/Signup" />} />
        <Route path='/Signup' element={<SignupLoginForm isSignup={true} />} />
        <Route path='/Login' element={<SignupLoginForm isSignup={false} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chat" element={<Chat />} />
        <Route path='/chatbot' element={<Chatbot />} />
      </Routes>
    </Router>
  );
}

export default App;
