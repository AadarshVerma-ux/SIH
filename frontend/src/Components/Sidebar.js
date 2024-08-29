import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white flex flex-col justify-between">
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>
        <nav className="space-y-2">
          <Link to="/chat" className="block py-2 px-3 rounded hover:bg-gray-700">
            Chat with Friends
          </Link>
          <Link to="/chatbot" className="block py-2 px-3 rounded hover:bg-gray-700">
            AI Chatbot
          </Link>
          <Link to="/quizzes" className="block py-2 px-3 rounded hover:bg-gray-700">
            Quizzes & Assessments
          </Link>
          <Link to="/notes" className="block py-2 px-3 rounded hover:bg-gray-700">
            Share Notes
          </Link>
          <Link to="/scheduling" className="block py-2 px-3 rounded hover:bg-gray-700">
            Plan Academics
          </Link>
          <Link to="/jobs" className="block py-2 px-3 rounded hover:bg-gray-700">
            Jobs & Internships
          </Link>
        </nav>
      </div>
      <div className="p-6">
        <Link to="/profile" className="block py-2 px-3 rounded bg-gray-700 hover:bg-gray-600 text-center">
          My Profile
        </Link>
      </div>
    </aside>
  );
}

export default Sidebar;
