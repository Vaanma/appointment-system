// src/components/DoctorProfile.js
import React from "react";
import './Doctors.css';
import { Link } from 'react-router-dom'; 


// Assuming your CSS is in App.css

const Doctorprofile = ({ doctor }) => (
  <div className="doctor-profile">
    <img src={doctor.imgSrc} alt="Doctor" className="doctor-image" />
    <div className="doctor-info">
      <h2>{doctor.name}</h2>
      <p>Specialization: {doctor.specialization}</p>
      <p>Rating: {doctor.rating}/5</p>
      <button className="view-profile">View Profile</button>
      <button className="book-now">Book Now</button>
    </div>
  </div>
);

export default Doctorprofile;