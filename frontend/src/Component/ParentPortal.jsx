import React from "react";
import { Box, Typography, Paper, Button, List, ListItem } from "@mui/material";

const ParentPortal = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f9f9f9",
        padding: 4,
        minHeight: "100vh",
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          textAlign: "center",
          marginBottom: 4,
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          Parent Portal Dashboard
        </Typography>
      </Box>

      {/* Portal Content */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 4,
        }}
      >
        {/* Child's Progress Section */}
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Typography variant="h5" gutterBottom>
            Child's Progress
          </Typography>
          <Typography>Grade: A+</Typography>
          <Typography>Attendance: 95%</Typography>
          <Typography>Remarks: Excellent performance!</Typography>
        </Paper>

        {/* Announcements Section */}
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Typography variant="h5" gutterBottom>
            Announcements
          </Typography>
          <List>
            <ListItem>
              Parent-Teacher meeting scheduled for March 25, 2025.
            </ListItem>
            <ListItem>
              School will remain closed on April 5, 2025, due to a public
              holiday.
            </ListItem>
          </List>
        </Paper>

        {/* Communication Section */}
        <Paper elevation={3} sx={{ padding: 2, textAlign: "center" }}>
          <Typography variant="h5" gutterBottom>
            Communicate with Teachers
          </Typography>
          <Typography>Email: teacher@example.com</Typography>
          <Typography>Phone: +91 9876543210</Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ marginTop: 2 }}
          >
            Send Message
          </Button>
        </Paper>
      </Box>
    </Box>
  );
};

export default ParentPortal;
