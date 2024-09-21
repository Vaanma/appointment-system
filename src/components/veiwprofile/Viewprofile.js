import React from 'react';
import './Viewprofile.css'; // Link to the CSS fil

const Viewprofile = () => {
  return (
    <div className="veiwprofilepage">
    <div className="veiw-container">
      {/* Container for Doctor's Photo and Name */}
      <div className="photo-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVTf3NQbleuH5z7n5rvobNZbWCPzDD9zRFRw&s"
          className="doctor-photo"
          alt="Doctor Kavitha"
        />
        <h2>Dr. Kavitha, MBBS</h2> {/* Name heading below the image */}
      </div>

      {/* Container for Doctor's Information */}
      <div className="veiwinfo-container">
        <div className="veiwinfo-section">
          <div className="veiwinfo-item">
            <p className="label">Age</p>
            <p className="value">34</p>
          </div>
          <div className="veiwinfo-item">
            <p className="label">Experience</p>
            <p className="value">6 years</p>
          </div>
          <div className="veiwinfo-item">
            <p className="label">Specialization</p>
            <p className="value">Dentist</p>
          </div>
          <div className="veiwinfo-item">
            <p className="label">Languages</p>
            <p className="value">English, Spanish</p>
          </div>
          <div className="veiwinfo-item">
            <p className="label">Email</p>
            <p className="value">johndoe@hospital.com</p>
          </div>
          <div className="veiwinfo-item">
            <p className="label">Phone</p>
            <p className="value">+123-456-7890</p>
          </div>
          <div className="veiwinfo-item">
            <p className="label">Ratings</p>
            <p className="value">4.5</p>
          </div>
          <div className="veiwinfo-item">
            <p className="label">Description</p>
            <p className="value">
              Dr. Kavitha is a skilled dentist specializing in general and
              cosmetic dentistry, dedicated to providing personalized dental
              care with a focus on patient comfort and oral health.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Viewprofile;
