import { Link } from 'react-router-dom';
import React from 'react';
import './RegisterPage.css';

export default function RegisterPage() {
  return (
    <div className="container">
      <div className="register-box">
        <h1>SMART LOCKER</h1>
        <div className="icon-box">
        <img src="/images/RFID-LOCKER.jpg" alt="RFID-LOCKER" className="rfid-locker" />
        </div>
        <form className="form">
        <label htmlFor="username">Username</label>
  <input id="username" type="text" placeholder="" required />

  <label htmlFor="email">Email</label>
  <input id="email" type="email" placeholder="" required />

  <label htmlFor="password">Password</label>
  <input id="password" type="password" placeholder="" required />

  <button  className="register-submit-button">Register</button>

    </form>
      </div>
      <Link to="/" className="signin-link">
      <button className="signin-redirect">SIGN IN!</button>
</Link>
    </div>

        


  );
}
