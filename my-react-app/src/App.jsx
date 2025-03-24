import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import StudentDashboard from "./Component/StudentDashboard";
import Navbar from "./Component/UserInterfaceNavbar";
import ChooseUser from "./Component/ChooseUser";

import TeacherDashboard from "./Component/TeacherDashboard"; // Import TeacherDashboard
import AdminDashboard from "./Component/AdminDashboard"; // Import AdminDashboard

import ParentPortal from "./Component/ParentPortal"; // Import ParentPortal

import SignUpPage from "./Component/SignUpPage"; // Import SignUpPage
import ForgotPassword from "./Component/ForgotPassword"; // Import ForgotPassword


function App() {
  return (
    <Router>
      <Routes>
        {/* Existing Routes */}
        <Route path="/" element={<Home />} /> {/* Route for Home */}
        <Route path="/choose-user" element={<ChooseUser />} /> {/* Route for ChooseUser */}

        <Route path="/student-dashboard" element={<StudentDashboard />} /> {/* Route for Student Dashboard */}

        <Route path="/teacher-dashboard" element={<TeacherDashboard />} /> {/* Route for Teacher Dashboard */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} /> {/* Route for Admin Dashboard */}

        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* New Routes for Parent Portal */}

        <Route path="/parent-portal" element={<ParentPortal />} />

        {/* Additional Routes */}
        <Route path="/signup" element={<SignUpPage />} /> {/* Route for Sign Up Page */}
        <Route path="/home" element={<Home />} /> {/* Route for Home */}
      </Routes>
    </Router>
  );
}

export default App;
