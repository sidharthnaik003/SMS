import React from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, Box, Paper, Button } from '@mui/material';
import Navbar from './UserInterfaceNavbar'; // Reuse your custom Navbar component
import ChatBot from './ChatBot'; // Import the ChatBot component

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

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

        {/* Contact Section */}
        <Box id="contact" my={5}>
          <Typography variant="h5" gutterBottom>
            Contact Us
          </Typography>
          <Typography>Email: admin@schoolmanagement.com</Typography>
          <Typography>Phone: +91 9876543210</Typography>
          <Typography>Address: 123 School Road, New Delhi, India</Typography>
        </Box>
      </Container>

      {/* ChatBot */}
      <ChatBot />
    </div>
  );
};

export default Home;
