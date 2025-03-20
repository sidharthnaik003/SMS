import React from "react";

import './Home.css'
import Navbar from "./Navbar";

function Home() {
    return (
        <>

        {/* Navbar */}
        <Navbar/>


         {/* Header Section */}
            <header className="home-header">
                <h1>Welcome to Our School</h1>
                <p>Inspiring a passion for learning and excellence</p>
            </header>

            {/* Mission Statement Section */}
            <section className="mission">
                <h2>Our Mission</h2>
                <p>
                    We aim to provide a holistic education that nurtures creativity, leadership, and academic excellence.
                </p>
            </section>

            {/* Upcoming Events Section */}
            <section className="events">
                <h2>Upcoming Events</h2>
                <ul>
                    <li>Science Fair - April 15, 2025</li>
                    <li>Sports Day - May 10, 2025</li>
                    <li>Annual Art Exhibition - June 20, 2025</li>
                </ul>
            </section>

            {/* News Section */}
            <section className="news">
                <h2>Recent News</h2>
                <p>
                    Congratulations to our top-performing students who excelled in the annual board exams!
                </p>
            </section>

            {/* Contact Section */}
            <section className="contact">
                <h2>Contact Us</h2>
                <p>Email: schooladmin@example.com</p>
                <p>Phone: +91 9876543210</p>
                <p>Address: 123 Education Lane, Mangaluru, Karnataka</p>
            </section>
            

        </>
    );
}

export default Home;




