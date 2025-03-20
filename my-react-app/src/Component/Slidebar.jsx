import React from "react";
import './Slidebar.css';

function Slidebar() {
    return (
        <div className="slidebar">
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