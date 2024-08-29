import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <div className="relative">
          <button className="focus:outline-none">
            <img
              src="https://via.placeholder.com/30"
              alt="Profile"
              className="rounded-full"
            />
          </button>
          <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg py-2 hidden group-hover:block">
            <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</Link>
            <Link to="/settings" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Settings</Link>
            <Link to="/logout" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Logout</Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
