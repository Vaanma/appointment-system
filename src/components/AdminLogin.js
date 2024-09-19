import React from 'react';
import './AdminLogin.css'; // Make sure to link the CSS file

const AdminLogin = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Admin Login</h2>
        <form>
          <div className="input-box">
            <input type="text" required />
            <label>Username</label>
          </div>
          <div className="input-box">
            <input type="password" required />
            <label>Password</label>
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
