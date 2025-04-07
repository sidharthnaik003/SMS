import React from 'react';
import { Box, Typography, Paper, List, ListItem, Divider } from '@mui/material';

const AdminDashboard = () => {
  return (
    <Box
      sx={{
        padding: 4,
        backgroundColor: '#f9f9f9',
        minHeight: '100vh',
      }}
    >
      {/* Dashboard Header */}
      <Box
        sx={{
          marginBottom: 4,
          textAlign: 'center',
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          Admin Dashboard
        </Typography>
      </Box>

      {/* Dashboard Sections */}
      <Box
        sx={{
          display: 'grid',
          gap: 4,
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        }}
      >
        {/* Section: Student Management */}
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Student Management
          </Typography>
          <Divider sx={{ marginBottom: 2 }} />
          <List>
            <ListItem>CRUD operations for managing student profiles</ListItem>
            <ListItem>Search functionality to find students</ListItem>
            <ListItem>Bulk import/export for multiple students</ListItem>
          </List>
        </Paper>

        {/* Section: Course Management */}
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Course Management
          </Typography>
          <Divider sx={{ marginBottom: 2 }} />
          <List>
            <ListItem>CRUD operations for managing courses</ListItem>
            <ListItem>Assign students to courses</ListItem>
            <ListItem>View enrolled students per course</ListItem>
          </List>
        </Paper>

        {/* Section: Attendance Tracking */}
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Attendance Tracking
          </Typography>
          <Divider sx={{ marginBottom: 2 }} />
          <List>
            <ListItem>Mark attendance for students</ListItem>
            <ListItem>View attendance reports (by course or student)</ListItem>
          </List>
        </Paper>

        {/* Section: Grades Management */}
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Grades Management
          </Typography>
          <Divider sx={{ marginBottom: 2 }} />
          <List>
            <ListItem>Record and update grades for assignments, quizzes, exams</ListItem>
            <ListItem>Calculate overall grades and GPA</ListItem>
          </List>
        </Paper>

        {/* Section: Reports and Analytics */}
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Reports and Analytics
          </Typography>
          <Divider sx={{ marginBottom: 2 }} />
          <List>
            <ListItem>Generate performance and attendance reports</ListItem>
            <ListItem>Visualize data through charts and graphs</ListItem>
          </List>
        </Paper>

        {/* Section: User Roles and Permissions */}
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            User Roles and Permissions
          </Typography>
          <Divider sx={{ marginBottom: 2 }} />
          <List>
            <ListItem>Define roles (admin, teacher, student, parent)</ListItem>
            <ListItem>Manage access levels for different roles</ListItem>
          </List>
        </Paper>
      </Box>
    </Box>
  );
};

export default AdminDashboard;
