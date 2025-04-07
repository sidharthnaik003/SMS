import React from "react";
import libraryImage from "../images/lib_books.jpg";
import './about.css';
const About = () => {
  return (
    <>
      {/* body */}

      <section class="hero">
        <div className='heading'>
          <h1>About Us</h1>
        </div>
        <div class="container1">
          <div class="hero-content">
            <h2> Welcome to the School Management System</h2>
            <p>
            Our school is a renowned institution dedicated to fostering academic excellence, creativity, and leadership. With state-of-the-art infrastructure, experienced faculty, and a commitment to holistic development, we strive to provide the best education to our students.
            </p>
          </div>
          <div class="hero-content">
            <h2> Our Story</h2><br/><br/>
            <p>
            Our school is a renowned institution dedicated to fostering academic excellence, creativity, and leadership. With state-of-the-art infrastructure, experienced faculty, and a commitment to holistic development, we strive to provide the best education to our students.
            </p>
          </div>
          <div class="hero-content">
            <h2> Our Team</h2><br/><br/>
            <p>
            Our school is a renowned institution dedicated to fostering academic excellence, creativity, and leadership. With state-of-the-art infrastructure, experienced faculty, and a commitment to holistic development, we strive to provide the best education to our students.
            </p>
          </div>
          <div class="hero-image">
            <img class="img1" src={libraryImage}></img>

          </div>
        </div>
      </section>

      {/* end of body */}

      {/* footer */}

      <footer class="bg-light pb-5">
        <div class="container text-center">
          <div>
            <div>Contact US</div>
            <div>Phone: +91 9876543210</div>
            <div>Email: admin@schoolmanagement.com</div>
          </div>
          <p class="font-italic text-muted mb-0">
            &copy; Copyrights  All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default About;
