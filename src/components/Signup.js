import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [isHovered, setIsHovered] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to backend)
    console.log(formData);
  };

  const handleGoogleSignup = (e) => {
    e.preventDefault();
    // Simulate the Google authentication process here
    // After successful login, navigate to the accounts page
    navigate('/accounts'); // Change '/accounts' to your desired route
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.heading}>Signup</h2>
        <input
          type="text"
          name="username"
          placeholder="Username" required
          value={formData.username}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Email" required
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="password"
          name="password"
          placeholder="Password" required
          value={formData.password}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password" required
          value={formData.confirmPassword}
          onChange={handleChange}
          style={styles.input}
        />
        
        <button 
          type="submit" 
          style={isHovered ? { ...styles.button, ...styles.buttonHover } : styles.button}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Signup
        </button>
        
        {/* Login link */}
        <p style={styles.text}>
          Already have an account?{' '}
          <Link className="login" to="/login" style={styles.link}>
            Login
          </Link>
        </p>
        
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: 'url("background-image-url")', // Add your background image URL here
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  form: {
    backgroundColor: 'rgba(255, 255, 255)', // Adjust the transparency here
    padding: '20px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
  },
  heading: {
    marginBottom: '20px',
    textAlign: 'center',
    color: '#2080b9',
  },
  input: {
    marginBottom: '15px',
    padding: '10px',
    borderRadius: '5px',
    border: '2px solid #CECECE',
    outline: 'none',
    fontSize: '16px',
  },
  button: {
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#2080b9',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#1e3a81',
  },
  text: {
    textAlign: 'center',
    marginTop: '16px',
    marginBottom: '10px',
    color: '#000',
  },
};

export default Signup;
