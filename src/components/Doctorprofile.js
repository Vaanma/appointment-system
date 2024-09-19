import React from 'react';
import './DoctorProfile.css'; // Link to the CSS file
const DoctorProfile = () => {
  return (
    <div className="container">
      {/* Personal Information Section (Left) */}
      <div className="card info-section">
        {/* Doctor's Photo */}
        <img src="doctor.png" alt="Doctor Photo" className="doctor-photo" />
        <h2>Dr. Johndoe, MBBS</h2> {/* Name heading */}
        <div className="info-item">
          <p className="label">Age</p>
          <p className="value">34</p>
        </div>
        <div className="info-item">
          <p className="label">Experience</p>
          <p className="value">6 years</p>
        </div>
      </div>

      {/* Doctor Details Section (Right) */}
      <div className="card info-section">
        <div className="info-item">
          <p className="label">Specialization</p>
          <p className="value">Dentist</p>
        </div>
        <div className="info-item">
          <p className="label">Languages</p>
          <p className="value">English, Spanish</p>
        </div>
        <div className="info-item">
          <p className="label">Email</p>
          <p className="value">johndoe@hospital.com</p>
        </div>
        <div className="info-item">
          <p className="label">Phone</p>
          <p className="value">+123-456-7890</p>
        </div>

        {/* Description Section */}
        <div className="description">Description</div>
        <div className="description-text">
          Dr. John Doe is a skilled dentist specializing in general and cosmetic dentistry, dedicated to providing personalized dental care with a focus on patient comfort and oral health.
        </div>

        {/* Book Now Button */}
        <a href="booking-page.html" className="book-btn">Book Now</a>
      </div>
    </div>
  );
}

export default DoctorProfile;  