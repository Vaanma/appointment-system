import React from 'react';
import './AdminLogin.css'; // Path to your CSS file

const AdminLogin = () => {
  return (
    <div className="adminlogin-page">
      <div className="adminlogin-container">
        <div className="adminlogin-box">
          <h1>Admin Login</h1>
          <form>
            <div className="admininput-box">
              <input type="text" required="required" />
              <label>Username</label>
            </div>
            <div className="admininput-box">
              <input type="password" required="required" />
              <label>Password</label>
            </div>
            <button className="adminlogin-btn">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
