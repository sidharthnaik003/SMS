import React from "react";
import { Box, Typography, Paper, List, ListItem, Divider } from "@mui/material";

const TeacherDashboard = () => {
  return (
    <Box
      sx={{
        padding: 4,
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
      }}
    >
      {/* Dashboard Header */}
      <Box
        sx={{
          marginBottom: 4,
          textAlign: "center",
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          Teacher Dashboard
        </Typography>
      </Box>

      {/* Dashboard Content */}
      <Box
        sx={{
          display: "grid",
          gap: 4,
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        }}
      >
        {/* Profile Section */}
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Profile Overview
          </Typography>
          <Divider sx={{ marginBottom: 2 }} />
          <Typography>Name: Mr. Rajesh Gupta</Typography>
          <Typography>Department: Science</Typography>
          <Typography>Email: rajesh.gupta@schoolmanagement.com</Typography>
        </Paper>

        {/* Tasks Section */}
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Assigned Tasks
          </Typography>
          <Divider sx={{ marginBottom: 2 }} />
          <List>
            <ListItem>Prepare lesson plans for next week</ListItem>
            <ListItem>Grade submitted assignments</ListItem>
            <ListItem>Conduct extra classes for Grade 10</ListItem>
          </List>
        </Paper>

        {/* Schedule Section */}
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Daily Schedule
          </Typography>
          <Divider sx={{ marginBottom: 2 }} />
          <Typography>Period 1: Physics - Grade 10</Typography>
          <Typography>Period 2: Chemistry - Grade 11</Typography>
          <Typography>Period 3: Science Lab</Typography>
          <Typography>Period 4: Free Period</Typography>
        </Paper>

        {/* Announcements Section */}
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Recent Announcements
          </Typography>
          <Divider sx={{ marginBottom: 2 }} />
          <List>
            <ListItem>Staff meeting on March 22, 2025</ListItem>
            <ListItem>Deadline for submitting exam papers: March 30, 2025</ListItem>
            <ListItem>New training session: April 5, 2025</ListItem>
          </List>
        </Paper>
      </Box>
    </Box>
  );
};

export default TeacherDashboard;
