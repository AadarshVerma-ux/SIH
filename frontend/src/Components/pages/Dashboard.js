import React from 'react';
import Navbar from '../Navbar';
import DashboardContent from '../DashboardContent';
import Footer from '../Footer';
import Sidebar from '../Sidebar';


function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <DashboardContent />
        <Footer />
      </div>
    </div>
  );
}

export default Dashboard;
