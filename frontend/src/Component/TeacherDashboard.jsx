import React from "react";
import "./TeacherDashboard.css";

const TeacherDashboard = () => {
  return (
    <div className="teacher-dashboard">
      <header className="dashboard-header">
        <h1>Teacher Dashboard</h1>
      </header>

      <section className="dashboard-content">
        {/* Profile Section */}
        <div className="profile-section">
          <h2>Profile Overview</h2>
          <p>Name: Mr. Rajesh Gupta</p>
          <p>Department: Science</p>
          <p>Email: rajesh.gupta@schoolmanagement.com</p>
        </div>

        {/* Tasks Section */}
        <div className="tasks-section">
          <h2>Assigned Tasks</h2>
          <ul>
            <li>Prepare lesson plans for next week</li>
            <li>Grade submitted assignments</li>
            <li>Conduct extra classes for Grade 10</li>
          </ul>
        </div>

        {/* Schedule Section */}
        <div className="schedule-section">
          <h2>Daily Schedule</h2>
          <p>Period 1: Physics - Grade 10</p>
          <p>Period 2: Chemistry - Grade 11</p>
          <p>Period 3: Science Lab</p>
          <p>Period 4: Free Period</p>
        </div>

        {/* Announcements Section */}
        <div className="announcements-section">
          <h2>Recent Announcements</h2>
          <ul>
            <li>Staff meeting on March 22, 2025</li>
            <li>Deadline for submitting exam papers: March 30, 2025</li>
            <li>New training session: April 5, 2025</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default TeacherDashboard;
