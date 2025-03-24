import React from 'react';
import './ParentPortal.css'; // CSS file for styling

const ParentPortal = () => {
  return (
    <div className="parent-portal">
      <header className="portal-header">
        <h1>Parent Portal Dashboard</h1>
      </header>

      <div className="portal-content">
        {/* Progress Section */}
        <div className="progress-section">
          <h2>Child's Progress</h2>
          <p>Grade: A+</p>
          <p>Attendance: 95%</p>
          <p>Remarks: Excellent performance!</p>
        </div>

        {/* Announcements Section */}
        <div className="announcements-section">
          <h2>Announcements</h2>
          <ul>
            <li>Parent-Teacher meeting scheduled for March 25, 2025.</li>
            <li>School will remain closed on April 5, 2025, due to a public holiday.</li>
          </ul>
        </div>

        {/* Communication Section */}
        <div className="communication-section">
          <h2>Communicate with Teachers</h2>
          <p>Email: teacher@example.com</p>
          <p>Phone: +91 9876543210</p>
          <button className="message-button">Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default ParentPortal;
