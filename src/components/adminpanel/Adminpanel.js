import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react'; // Must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import '@fullcalendar/core/vdom'; // Correct path for FullCalendar core CSS
import '@fullcalendar/daygrid/main.css'; // Correct path for DayGrid plugin CSS
import './Adminpanel.css'; // Your custom styles

const AdminPanel = () => {
  const [events] = useState([
    { title: 'Long Event', start: '2024-09-07', end: '2024-09-10' },
    { title: 'Conference', start: '2024-09-11', end: '2024-09-13' },
    { title: 'Birthday Party', start: '2024-09-13T07:00:00' }
  ]);

  return (
    <div className="admin-container">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="admin-profile">
          <img src="images/doctor image.jpg" alt="Doctor Profile" className="profile-img" />
          <h3>Dr. John</h3>
          <p>Welcome</p>
        </div>
        <div className="today-report">
          <div>16 Patients</div>
          <div>20 Pending</div>
          <div>4 Visits</div>
        </div>
        <nav className="admin-nav">
          <ul>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Doctor Schedule</a></li>
            <li><a href="#">Book Appointment</a></li>
            <li><a href="#">Doctors</a></li>
            <li><a href="#">Patients</a></li>
            <li><a href="#">Payments</a></li>
            <li><a href="#">Reports</a></li>
            <li><a href="#">Settings</a></li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="admin-content">
        <header className="admin-header">
          <h2>Doctor Schedule</h2>
          <button className="add-event-btn">+ Events</button>
        </header>

        <div id="calendar">
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            events={events}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
