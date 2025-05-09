import { Link } from 'react-router-dom';
import React from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();
 
  const handleSubmit = (e) => {
    e.preventDefault();
    
    navigate('/dashboard');
  };
 
 
  return (
    <div className="container">
      <div className="login-box">
        <h1>SMART LOCKER</h1>
        <div className="icon-box">
          <img src="images/RFID-LOCKER.jpg" alt="RFID-LOCKER" className="rfid-locker" />
        </div>
        <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
  <input id="email" type="email" placeholder="" required />

  <label htmlFor="password">Password</label>
  <input id="password" type="password" placeholder="" required />

  <button type="submit" className="sign-in-button">Sign In</button>

  <a href="/forgot-password" className="forgot-password-link">Forgot password?</a>

          </form>

      </div>
      <Link to="/register" className="register-link">
  <button className="register-button">REGISTER HERE!</button>
</Link>
    </div>




  );
}
