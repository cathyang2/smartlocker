import React from 'react';
import {FaArrowLeft, FaBell, FaBars} from 'react-icons/fa';
import './DashboardPage.css';


export default function DashboardPage() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
       
        <div className="right-icons">
         
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
        <button className="dashboard-btn">ITEMS ON LOCKER</button>
      </div>
    </div>
  );
}
