import React from "react";
import { Box, Typography, Paper, Divider } from "@mui/material";
import Slidebar from "./Slidebar";

function StudentDashboard() {
  return (
    <Box
      sx={{
        backgroundColor: "#f9f9f9",
        padding: 4,
        minHeight: "100vh",
      }}
    >
      {/* Dashboard Header */}
      <Typography
        variant="h3"
        component="h1"
        align="center"
        gutterBottom
        sx={{ marginBottom: 4 }}
      >
        Student Dashboard
      </Typography>

      {/* Slidebar Component */}
      <Slidebar />

      {/* Cards Section */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 4,
        }}
      >
        {/* Profile Overview */}
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Typography variant="h5" gutterBottom>
            Profile Overview
          </Typography>
          <Divider sx={{ marginBottom: 2 }} />
          <Typography>Name: [Student Name]</Typography>
          <Typography>Roll No: [Roll No]</Typography>
          <Typography>Class: [Class]</Typography>
        </Paper>

        {/* Academic Information */}
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Typography variant="h5" gutterBottom>
            Academic Information
          </Typography>
          <Divider sx={{ marginBottom: 2 }} />
          <Typography>Subjects: [Subject]</Typography>
          <Typography>Marks: [Marks]</Typography>
          <Typography>Attendance: [Attendance]</Typography>
        </Paper>

        {/* Assignments */}
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Typography variant="h5" gutterBottom>
            Assignment
          </Typography>
          <Divider sx={{ marginBottom: 2 }} />
          <Typography>Upcoming Assignments: [Assignment]</Typography>
          <Typography>Status of Submitted Assignments: [Status]</Typography>
        </Paper>

        {/* Time Table */}
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Typography variant="h5" gutterBottom>
            Time Table
          </Typography>
          <Divider sx={{ marginBottom: 2 }} />
          <Typography>Daily Class Schedule: [Schedule]</Typography>
          <Typography>Exam Dates: [Dates]</Typography>
        </Paper>

        {/* Announcements */}
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Typography variant="h5" gutterBottom>
            Announcements
          </Typography>
          <Divider sx={{ marginBottom: 2 }} />
          <Typography>New Announcements: [Announcements]</Typography>
          <Typography>Reminders: [Reminders]</Typography>
        </Paper>
      </Box>
    </Box>
  );
}

export default StudentDashboard;
