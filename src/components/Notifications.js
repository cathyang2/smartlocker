import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import './NotificationsPage.css';

export default function NotificationsPage() {
  const notifications = [
    { time: '9:41 AM', message: 'Your Smart Locker expires in one week' },
    { time: '9:40 AM', message: 'Your Smart Locker expires in two weeks' },
    { time: '7:20 PM', message: 'Your Smart Locker is unlocked' },
    { time: '9:41 AM', message: 'Your Smart Locker expires in one month' },
    { time: '9:41 AM', message: 'Your Smart Locker expires in three months' },
    { time: '9:41 AM', message: 'Unauthorized attempt has been detected' },
    { time: '9:41 AM', message: 'Your Smart Locker expires in six months' },
    { time: '9:41 AM', message: 'You can now start using your Smart Locker' },
  ];

  return (
    <div className="notifications-container">
      <div className="notifications-header">
        <FaArrowLeft className="back-icon" />
        <h2>NOTIFICATIONS</h2>
      </div>
      <div className="notifications-list">
        {notifications.map((notif, index) => (
          <div key={index} className="notification-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              alt="icon"
              className="notif-icon"
            />
            <div className="notif-text">
              <strong>Smart Locker</strong>
              <p>{notif.message}</p>
            </div>
            <span className="notif-time">{notif.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
