import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './output.css';
import LayoutLoader from './Components/Layouts/LayoutLoader';

const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Chat = React.lazy(() => import('./pages/Chat'));
const Chatbot = React.lazy(() => import('./pages/Chatbot'));
const SignupLoginForm = React.lazy(() => import('./pages/SignupLoginForm'));


function App() {
  return (
    <Router>
      <Suspense fallback={<LayoutLoader />}>
        <Routes>
          <Route path="/" element={<Navigate to="/Signup" />} />
          <Route path='/Signup' element={<SignupLoginForm isSignup={true} />} />
          <Route path='/Login' element={<SignupLoginForm isSignup={false} />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/chat" element={<Chat />} />
          <Route path='/chatbot' element={<Chatbot />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
