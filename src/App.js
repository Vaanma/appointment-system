import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';  // Ensure correct path
import Signup from './components/Signup';  // Ensure correct path
// import Appointment from './components/Appointment';

function App() {
  return (
    <Router>
      <div className="App">
      {/* <Appointment /> */}
         <Routes>
         <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />  {/* Ensure /login route exists */}
          <Route path="/signup" element={<Signup />} />  Ensure /signup route exists 
          </Routes> 
      </div>
    </Router>
  );
}

export default App;
