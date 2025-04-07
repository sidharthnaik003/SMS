import React, { useState } from 'react';
import { Box, Typography, Grid, Button, TextField, Checkbox, FormControlLabel, Link, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Navigation functionality

const ChooseUser = () => {
  const [selectedUserType, setSelectedUserType] = useState(''); // State for selected user type
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!selectedUserType) {
      alert('Please select a user type before logging in!'); // Validation for user type selection
      return;
    }

    // Navigate to the dashboard based on the selected user type
    switch (selectedUserType) {
      case 'Admin':
        navigate('/admin-dashboard');
        break;
      case 'Teacher':
        navigate('/teacher-dashboard');
        break;
      case 'Student':
        navigate('/student-dashboard');
        break;
      case 'Parent':
        navigate('/parent-portal');
        break;
      default:
        alert('Invalid user type!'); // Fallback for unexpected cases
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        margin: '0 auto',
        padding: 4,
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        alignItems: 'center',
      }}
    >
      {/* Account Link */}
      <Typography variant="body1">
        <Link href="/signup" underline="hover">
          I do not have an account yet.
        </Link>
      </Typography>

      {/* User Type Selection */}
      <Grid container spacing={2} justifyContent="center">
        {['Admin', 'Teacher', 'Student', 'Parent'].map((userType) => (
          <Grid item xs={6} sm={3} key={userType}>
            <Paper
              elevation={selectedUserType === userType ? 6 : 2}
              sx={{
                padding: 2,
                textAlign: 'center',
                cursor: 'pointer',
                border: selectedUserType === userType ? '2px solid #003366' : 'none',
                '&:hover': { border: '2px solid #007bff' },
              }}
              onClick={() => setSelectedUserType(userType)}
            >
              <Typography variant="h6">{userType}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Login Form */}
      <Box component="form" onSubmit={handleLogin} sx={{ width: '100%', maxWidth: 400 }}>
        <TextField
          fullWidth
          variant="outlined"
          label="Username"
          type="text"
          required
          sx={{ marginBottom: 2 }}
        />
        <TextField
          fullWidth
          variant="outlined"
          label="Password"
          type="password"
          required
          sx={{ marginBottom: 2 }}
        />
        <FormControlLabel
          control={<Checkbox id="rememberMe" />}
          label="Remember Me"
        />
        <Button type="submit" variant="contained" fullWidth sx={{ marginTop: 2 }}>
          Log in
        </Button>
      </Box>

      {/* Forgot Password Link */}
      <Typography variant="body2" sx={{ marginTop: 2 }}>
        <Link href="/forgot-password" underline="hover">
          Forgot password?
        </Link>
      </Typography>
    </Box>
  );
};

export default ChooseUser;
