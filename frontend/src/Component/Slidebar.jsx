import React, { useState } from "react";
import "./Slidebar.css";

function Slidebar() {
  const [isOpen, setIsOpen] = useState(false); // State to track the slidebar visibility

  return (
    <div
      className={`slidebar ${isOpen ? "open" : ""}`}
      onMouseEnter={() => setIsOpen(true)} // Open slidebar on hover
      onMouseLeave={() => setIsOpen(false)} // Close slidebar when mouse leaves
    >
      <h2 className="slidebar-header">Menu</h2>
      <p className="slidebar-item">Dashboard</p>
      <p className="slidebar-item">Profile Overview</p>
      <p className="slidebar-item">Academic Information</p>
      <p className="slidebar-item">Assignments</p>
      <p className="slidebar-item">Time Table</p>
      <p className="slidebar-item">Announcements</p>
    </div>
  );
}

export default Slidebar;
