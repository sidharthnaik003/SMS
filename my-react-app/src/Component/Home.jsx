import React from 'react';
import Navbar from './Navbar'; // Import the Navbar component
import './Home.css'; // Make sure to add styling as needed!

const Home = () => {
  return (
    <div className="home-container">

<Navbar />

      {/* Welcome Section */}
      <header className="home-header">
        <h1>Welcome to Our School Management System</h1>
        <p>Your partner in educational excellence and management.</p>
      </header>

      {/* Mission Statement Section */}
      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          Empowering educators and students with tools to unlock their full potential through efficient management and collaboration.
        </p>
      </section>

      {/* Upcoming Events Section */}
      <section className="events-section">
        <h2>Upcoming Events</h2>
        <ul>
          <li>Parent-Teacher Meeting - March 25, 2025</li>
          <li>Sports Meet - April 10, 2025</li>
          <li>Annual Function - May 15, 2025</li>
        </ul>
      </section>

      {/* Recent News Section */}
      <section className="news-section">
        <h2>Recent News</h2>
        <p>
          Congratulations to our students for their achievements in the state-level Science Olympiad!
        </p>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>Email: admin@schoolmanagement.com</p>
        <p>Phone: +91 9876543210</p>
        <p>Address: 123 School Road, New Delhi, India</p>
      </section>
    </div>
  );
};

export default Home;
