import React, { useState } from 'react';
import './Appointment.css';

const AppointmentForm = () => {
  // State to track if "Yes" is selected
  const [medications, setMedications] = useState(false);

  // Function to handle radio button changes
  const handleMedicationChange = (event) => {
    setMedications(event.target.value === 'Yes'); // If "Yes" is selected, set to true
  };

  return (
    <div className="appointment-container">
      <div className="appointment-box">
        <h2>APPOINTMENT FORM</h2>
        <form>
          <div className="input">
            <label htmlFor="patient-name">Patient Name</label>
            <input type="text" name="patient-name" id="patient-name" required />
          </div>
          <div className="input">
            <label htmlFor="phone-number">Phone Number</label>
            <input type="text" name="phone-number" id="phone-number" required />
          </div>
          <div className="input">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required />
          </div>
          <div className="input">
            <label htmlFor="age">Age</label>
            <input type="number" name="age" id="age" required />
          </div>
          <div className="radio-group">
            <label>Gender</label>
            <input type="radio" name="gender" value="male" id="male" required />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" value="female" id="female" required />
            <label htmlFor="female">Female</label>
          </div>
          <div className="input">
            <label htmlFor="address">Address</label>
            <input type="text" name="address" id="address" required />
          </div>
          <div className="input">
            <label htmlFor="Symptoms">Symptoms</label>
            <input type="text" name="Symptoms" id="Symptoms" required />
          </div>
          <div className="input">
            <label htmlFor="specialist">Specialist</label>
            <input type="text" name="specialist" id="specialist" required />
          </div>
          <div className="input">
            <label htmlFor="date">Date of Appointment</label>
            <input type="date" name="date" id="date" required />
          </div>
          <div className="input">
            <label htmlFor="time">Appointment Time</label>
            <input type="time" name="time" id="time" required />
          </div>
          <div className="radio-group">
            <label>Taking Any Medications Currently?</label>
            <input 
              type="radio" 
              name="qs-text" 
              value="Yes" 
              id="Yes"
              onChange={handleMedicationChange}
            />
            <label htmlFor="Yes">Yes</label>
            <input 
              type="radio" 
              name="qs-text" 
              value="No" 
              id="No"
              onChange={handleMedicationChange}
            />
            <label htmlFor="No">No</label>
          </div>
          
          {/* Conditionally render or highlight the list input based on selection */}
          <div className="input">
            <label htmlFor="list">If yes, please list it:</label>
            <input 
              type="text" 
              name="list" 
              id="list" 
              disabled={!medications} 
              className={medications ? 'highlight' : ''}
            />
          </div>
          <div className="submit">
            <button type="submit">Confirm Appointment</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;
