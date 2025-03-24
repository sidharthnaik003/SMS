import React from 'react';
import Navbar from './UserInterfaceNavbar'; // Import the Navbar component
import ChatBot from './ChatBot'; // Import the ChatBot component (kept specifically here for Home page)
import './Home.css'; // Import the CSS for styling

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

      {/* Overview Section */}
      <section className="overview-section">
        <h2>Overview</h2>
        <p>
          Our school is a renowned institution dedicated to fostering academic excellence,
          creativity, and leadership. With state-of-the-art infrastructure, experienced faculty,
          and a commitment to holistic development, we strive to provide the best education to our students.
        </p>
      </section>

      {/* Academics Section */}
      <section className="academics-section">
        <h2>Academics</h2>
        <p>
          We offer a comprehensive and inclusive curriculum designed to meet the needs of 21st-century learners. 
          Our academic calendar ensures a balanced approach to learning, including examinations, holidays, and special events.
        </p>
        <ul>
          <li>Curriculum: Tailored for both practical and theoretical excellence, covering core subjects and electives.</li>
          <li>Academic Calendar: Keep track of key dates, including exams, holidays, and school events.</li>
          <li>Departments: Specialized departments for Science, Arts, Mathematics, and Languages.</li>
        </ul>
      </section>

      {/* History Section */}
      <section className="history-section">
        <h2>History</h2>
        <p>
          Established in 1985, our school has a rich heritage of over 40 years of excellence in education.
          From humble beginnings with a handful of students, we have grown into a flourishing institution
          known for its innovative teaching methods and outstanding results.
        </p>
      </section>

      {/* Staff Section */}
      <section className="staff-section">
        <h2>Meet Our Staff</h2>
        <p>
          Our dedicated team of educators and staff members work tirelessly to create a positive
          and nurturing learning environment for our students.
        </p>
        <ul>
          <li>Principal: Dr. Anjali Sharma</li>
          <li>Vice Principal: Mr. Rajesh Gupta</li>
          <li>Head of Science Department: Mrs. Kavita Mehra</li>
          <li>Head of Arts Department: Mr. Arvind Kapoor</li>
        </ul>
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

      {/* ChatBot Component */}
      <ChatBot /> {/* Exclusively for the Home page */}
    </div>
  );
};

export default Home;
