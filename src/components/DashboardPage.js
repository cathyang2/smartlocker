import React from 'react';
import {FaArrowLeft, FaBell, FaBars} from 'react-icons/fa';
import './DashboardPage.css';
import { useNavigate } from 'react-router-dom';

export default function DashboardPage() {
  return (
    <div className="dashboard-container">
        <div className="dashboard-header">
        <FaArrowLeft className="icon back-icon" title="Back" />
        <div className="right-icons">
           <FaBell className="icon bell-icon" title="Notifications" />
           <FaBars className="icon menu-icon" title="Menu" />
        </div>
      </div>

      <div className="profile-icon">
        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="User Icon"
        />
      </div>

      <div className="welcome-box">
        <span className="close-btn"></span>
        <h2>Welcome to LOCKER 01!</h2>
        <p>SMART LOCKER SYSTEM</p>
        <p>LOCKER EXPIRES ON 05/31/25</p>
      </div>

      <div className="dashboard-buttons">
        <button className="dashboard-btn">LOCKER LOGS</button>
        <button className="dashboard-btn" onClick={() => navigate('/items')}>ITEMS ON LOCKER</button>
      </div>
    </div>
  );
}
