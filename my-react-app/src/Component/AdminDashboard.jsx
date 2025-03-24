import React from "react";
import "./AdminDashboard.css"; // CSS file for styling the dashboard

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <header className="dashboard-header">
        <h1>Admin Dashboard</h1>
      </header>

      <div className="dashboard-sections">
        {/* Student Management Section */}
        <div className="section">
          <h2>Student Management</h2>
          <ul>
            <li>CRUD operations for managing student profiles</li>
            <li>Search functionality to find students</li>
            <li>Bulk import/export for multiple students</li>
          </ul>
        </div>

        {/* Course Management Section */}
        <div className="section">
          <h2>Course Management</h2>
          <ul>
            <li>CRUD operations for managing courses</li>
            <li>Assign students to courses</li>
            <li>View enrolled students per course</li>
          </ul>
        </div>

        {/* Attendance Tracking Section */}
        <div className="section">
          <h2>Attendance Tracking</h2>
          <ul>
            <li>Mark attendance for students</li>
            <li>View attendance reports (by course or student)</li>
          </ul>
        </div>

        {/* Grades Management Section */}
        <div className="section">
          <h2>Grades Management</h2>
          <ul>
            <li>Record and update grades for assignments, quizzes, exams</li>
            <li>Calculate overall grades and GPA</li>
          </ul>
        </div>

        {/* Reports and Analytics Section */}
        <div className="section">
          <h2>Reports and Analytics</h2>
          <ul>
            <li>Generate performance and attendance reports</li>
            <li>Visualize data through charts and graphs</li>
          </ul>
        </div>

        {/* User Roles and Permissions Section */}
        <div className="section">
          <h2>User Roles and Permissions</h2>
          <ul>
            <li>Define roles (admin, teacher, student, parent)</li>
            <li>Manage access levels for different roles</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
