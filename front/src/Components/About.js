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
              Welcome to School Management System, your gateway to a world of knowledge and imagination. We are more than just a library; we are a community of book enthusiasts and learners dedicated to fostering a love for reading and lifelong learning.
            </p>
          </div>
          <div class="hero-content">
            <h2> Our Story</h2><br/><br/>
            <p>
            School Management System was founded with a vision to provide a haven for book lovers of all ages, backgrounds, and interests. Our journey began in [Year of Establishment], and since then, we have been on a mission to make the world of literature accessible to everyone.
            </p>
          </div>
          <div class="hero-content">
            <h2> Our Team</h2><br/><br/>
            <p>
            Behind School Management System is a passionate team of librarians, educators, and book enthusiasts who are dedicated to curating, preserving, and sharing the world of literature with you. We are here to assist you in discovering the perfect book, organizing events, and making your library experience memorable.
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
