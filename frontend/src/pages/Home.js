import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Welcome to Student Collaboration App</h1>
      <p>Your hub for collaborative learning and project management.</p>
      <div style={{ marginTop: '20px' }}>
        <Link to="/signup" style={{ marginRight: '10px' }}>
          <button>Sign Up</button>
        </Link>
        <Link to="/login">
          <button>Log In</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
