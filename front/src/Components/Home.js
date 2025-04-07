import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, Container, Grid, Box, Paper, Button } from '@mui/material';

import React from 'react';





import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import logo from "../images/library.png";
import Axios from "axios";
import './home.css';

const Home = () => {
  const [fdata, setFData] = useState([]);
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
      }
      const { data } = await axios.post(
        "http://localhost:4000",
        {},
        { withCredentials: true }
      );

      const { status, user } = data;
      setUsername(user);
      if (status) {
        const hasShownLoginToast = localStorage.getItem("hasShownLoginToast");  // show the toast notification only once
        if (!hasShownLoginToast) {
          toast(`Hello ${user}`, {
            position: "top-right",
          });
          localStorage.setItem("hasShownLoginToast", "true");
        }
      } else {
        removeCookie("token");
        navigate("/login");
      }
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  const Logout = () => {
    localStorage.removeItem("hasShownLoginToast"); // Clear the flag+
    removeCookie("token");
    navigate("/login");
  };
  Axios.get("http://localhost:4000/book")
    .then((res) => {
      setFData(res.data);
    })
    .catch((error) => {
      console.error("Error fetching books:", error);
    });
  return (
    <>
      <body>
        <nav class="navbar sticky-top navbar-expand-lg ">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img
                src={logo}
                class="me-2 ps-0"
                height="40"
                alt="Logo"
              />
              <small>School Management System</small>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mx-auto mb-2 mb-lg-0 ">
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/Service">Dashboard</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="/about">About</a>
                </li>
              </ul>
              <form class="d-flex" >
                <button class="btn btn-outline-danger logoutButton" onClick={Logout}>Logout</button>
              </form>
            </div>
          </div>
        </nav>
        <br></br>
        
        {/* Welcome Section */}
        <AppBar position="static" style={{ backgroundColor: '#003366', color: 'white', marginBottom: '20px' }}>
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              Welcome to Our School Management System
            </Typography>
          </Toolbar>
        </AppBar>

        <Container>
          <Grid container spacing={4}>
            {/* Image and Intro */}
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom>
                Welcome!
              </Typography>
              <Typography variant="body1" color="textSecondary" paragraph>
                Your partner in educational excellence and management.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                href="#contact"
                style={{ marginTop: '15px' }}
              >
                Get in Touch
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <img
                src="/path-to-your-image/students.jpg"
                alt="Happy Students"
                style={{ width: '100%', borderRadius: '10px' }}
              />
            </Grid>
          </Grid>

          {/* Mission Statement */}
          <Box my={5}>
            <Paper elevation={3} style={{ padding: '20px' }}>
              <Typography variant="h5" gutterBottom>
                Our Mission
              </Typography>
              <Typography>
                Empowering educators and students with tools to unlock their full potential through efficient management and collaboration.
              </Typography>
            </Paper>
          </Box>

          {/* Overview Section */}
          <Box my={5}>
            <Typography variant="h5" gutterBottom>
              Overview
            </Typography>
            <Typography paragraph>
              Our school is a renowned institution dedicated to fostering academic excellence, creativity, and leadership. With state-of-the-art infrastructure, experienced faculty, and a commitment to holistic development, we strive to provide the best education to our students.
            </Typography>
          </Box>

          {/* Academic Section */}
          <Box my={5}>
            <Paper elevation={3} style={{ padding: '20px' }}>
              <Typography variant="h5" gutterBottom>
                Academics
              </Typography>
              <Typography>
                We offer a comprehensive and inclusive curriculum designed to meet the needs of 21st-century learners.
              </Typography>
              <ul>
                <li>
                  <Typography>Curriculum: Practical and theoretical excellence.</Typography>
                </li>
                <li>
                  <Typography>Academic Calendar: Exams, holidays, and school events.</Typography>
                </li>
                <li>
                  <Typography>Departments: Specialized Science, Arts, and Mathematics departments.</Typography>
                </li>
              </ul>
            </Paper>
          </Box>

          {/* History */}
          <Box my={5}>
            <Typography variant="h5" gutterBottom>
              History
            </Typography>
            <Typography paragraph>
              Established in 1985, our school has a rich heritage of over 40 years of excellence in education.
            </Typography>
          </Box>

          {/* Staff */}
          <Box my={5}>
            <Paper elevation={3} style={{ padding: '20px' }}>
              <Typography variant="h5" gutterBottom>
                Meet Our Staff
              </Typography>
              <Typography>
                Our dedicated team of educators and staff members create a positive and nurturing learning environment.
              </Typography>
              <ul>
                <li>
                  <Typography>Principal: Dr. Anjali Sharma</Typography>
                </li>
                <li>
                  <Typography>Vice Principal: Mr. Rajesh Gupta</Typography>
                </li>
                <li>
                  <Typography>Head of Science: Mrs. Kavita Mehra</Typography>
                </li>
                <li>
                  <Typography>Head of Arts: Mr. Arvind Kapoor</Typography>
                </li>
              </ul>
            </Paper>
          </Box>

          {/* Upcoming Events */}
          <Box my={5}>
            <Typography variant="h5" gutterBottom>
              Upcoming Events
            </Typography>
            <ul>
              <li>
                <Typography>Parent-Teacher Meeting - March 25, 2025</Typography>
              </li>
              <li>
                <Typography>Sports Meet - April 10, 2025</Typography>
              </li>
              <li>
                <Typography>Annual Function - May 15, 2025</Typography>
              </li>
            </ul>
          </Box>

          {/* Recent News */}
          <Box my={5}>
            <Paper elevation={3} style={{ padding: '20px' }}>
              <Typography variant="h5" gutterBottom>
                Recent News
              </Typography>
              <Typography>
                Congratulations to our students for their achievements in the state-level Science Olympiad!
              </Typography>
            </Paper>
          </Box>


        </Container>

        <br></br>
        <br></br>
        <div className="container row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 p-4">
          {fdata.slice(-4).map((book) => (
            <div className="col-md-3 col-lg-3 col-sm-6 mb-4" key={book._id}>
              <div className="card shadow-sm">
                <img
                  src={book.image}
                  className="card-img-top"
                  alt="Book Cover"
                  style={{ height: "300px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{book.title}</h5>
                  <p className="card-text">
                    <strong>Author:</strong> {book.author}
                  </p>
                  <p className="card-text">
                    <strong>Genre:</strong> {book.genre}
                  </p>
                  <p className="card-text">
                    <strong>Year:</strong> {book.year}
                  </p>
                  <div className="d-flex justify-content-center align-items-center mt-3">
                    {/* <a href={`/view`} className="viewButton">
                      View
                    </a> */}
                    <form action="/view" >
                      <button class="btn btn-danger viewButton" type="submit">View</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </body>
      <br />
      <hr></hr>
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
      <ToastContainer />
    </>
  );
};

export default Home;


