import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-white shadow p-4 text-center text-gray-500">
      &copy; 2024 CollabMate. All rights reserved. | 
      <Link to="/privacy-policy" className="text-blue-500 hover:underline">
        Privacy Policy
      </Link>
    </footer>
  );
}

export default Footer;
