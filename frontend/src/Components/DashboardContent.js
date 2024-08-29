import React from 'react';
import { Link } from 'react-router-dom';

function DashboardContent() {
  return (
    <main className="flex-grow p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link to={"/chat"} className="bg-blue-500 text-white p-4 rounded-lg shadow-lg hover:bg-blue-600 transition">
          <h2 className="text-xl font-semibold">Chat with Friends</h2>
          <p>Join real-time conversations with your friends.</p>
        </Link>
        <Link to={"/chatbot"} className="bg-green-500 text-white p-4 rounded-lg shadow-lg hover:bg-green-600 transition">
          <h2 className="text-xl font-semibold">AI Chatbot</h2>
          <p>Get assistance from our AI-powered chatbot.</p>
        </Link>
        <Link to="/quizzes" className="bg-purple-500 text-white p-4 rounded-lg shadow-lg hover:bg-purple-600 transition">
          <h2 className="text-xl font-semibold">Quizzes & Assessments</h2>
          <p>Test your knowledge with topic-specific quizzes.</p>
        </Link>
        <Link to="/notes" className="bg-yellow-500 text-white p-4 rounded-lg shadow-lg hover:bg-yellow-600 transition">
          <h2 className="text-xl font-semibold">Share Notes</h2>
          <p>Collaborate by sharing and discussing notes.</p>
        </Link>
        <Link to="/scheduling" className="bg-red-500 text-white p-4 rounded-lg shadow-lg hover:bg-red-600 transition">
          <h2 className="text-xl font-semibold">Plan Academics</h2>
          <p>Organize your tasks and set reminders.</p>
        </Link>
        <Link to="/jobs" className="bg-teal-500 text-white p-4 rounded-lg shadow-lg hover:bg-teal-600 transition">
          <h2 className="text-xl font-semibold">Jobs & Internships</h2>
          <p>Find opportunities that match your skills and interests.</p>
        </Link>
      </div>
    </main>
  );
}

export default DashboardContent;
