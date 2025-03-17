import React from "react";

import './Home.css'

function Home() {
    return (
        <div className="Student-dashboard">
        <h1 className="Student">Student Dashboard</h1>

        <div className="card">
        <div className="profile">
            <h1>Profile overview</h1>
            <p>name</p>
            <p>rollno</p>
            <p>class</p>
        </div>

        <div className="academic-information">
            <h1>Academic Information</h1>
            <p>Subject</p>
            <p>Marks</p>
            <p>Attendance</p>
        </div>

        
        <div className="Assignment">
        <h1>Assignment </h1>
            <p>Upcomming Assignment</p>
            <p>Status of submitted Assignment</p>
            
        </div>

        <div className="time-table">
            <h1>Time Table</h1>
            <p>Daily class shedule</p>
            <p>Exam dates</p>
            
        </div>

        
        <div className="Announcements">
            <h1>Announcements</h1>
            <p>new Annoucements</p>
            <p>Reminder</p>
        </div>

        


        </div>
        </div>
    );
}

export default Home;
