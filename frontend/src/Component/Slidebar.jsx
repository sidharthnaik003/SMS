import React, { useState } from "react";
import { Box, Typography, Paper } from "@mui/material";

function Slidebar() {
  const [isOpen, setIsOpen] = useState(false); // State to track the slidebar visibility

  return (
    <Paper
      elevation={3}
      sx={{
        width: isOpen ? 200 : 70, // Width changes when open or closed
        transition: "width 0.3s ease", // Smooth transition for sliding effect
        overflow: "hidden",
        backgroundColor: "#003366",
        color: "white",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
      }}
      onMouseEnter={() => setIsOpen(true)} // Open slidebar on hover
      onMouseLeave={() => setIsOpen(false)} // Close slidebar when mouse leaves
    >
      <Box
        sx={{
          padding: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: isOpen ? "flex-start" : "center", // Center items when closed
          gap: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            textAlign: isOpen ? "left" : "center",
            width: "100%",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          Menu
        </Typography>

        <Typography
          variant="body1"
          sx={{
            cursor: "pointer",
            textAlign: isOpen ? "left" : "center",
            "&:hover": {
              color: "#007bff", // Change color on hover
            },
          }}
        >
          Dashboard
        </Typography>

        <Typography
          variant="body1"
          sx={{
            cursor: "pointer",
            textAlign: isOpen ? "left" : "center",
            "&:hover": {
              color: "#007bff",
            },
          }}
        >
          Profile Overview
        </Typography>

        <Typography
          variant="body1"
          sx={{
            cursor: "pointer",
            textAlign: isOpen ? "left" : "center",
            "&:hover": {
              color: "#007bff",
            },
          }}
        >
          Academic Information
        </Typography>

        <Typography
          variant="body1"
          sx={{
            cursor: "pointer",
            textAlign: isOpen ? "left" : "center",
            "&:hover": {
              color: "#007bff",
            },
          }}
        >
          Assignments
        </Typography>

        <Typography
          variant="body1"
          sx={{
            cursor: "pointer",
            textAlign: isOpen ? "left" : "center",
            "&:hover": {
              color: "#007bff",
            },
          }}
        >
          Time Table
        </Typography>

        <Typography
          variant="body1"
          sx={{
            cursor: "pointer",
            textAlign: isOpen ? "left" : "center",
            "&:hover": {
              color: "#007bff",
            },
          }}
        >
          Announcements
        </Typography>
      </Box>
    </Paper>
  );
}

export default Slidebar;
