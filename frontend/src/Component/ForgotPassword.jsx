import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import navigation hook
import {
  Box,
  Typography,
  TextField,
  Button,
  Alert,
  Link,
} from '@mui/material'; // Import Material-UI components

const ForgotPassword = () => {
  const [email, setEmail] = useState(''); // State for email input
  const [error, setError] = useState(''); // State for error messages (if any)
  const navigate = useNavigate(); // Navigation functionality

  const handleResetPassword = (e) => {
    e.preventDefault();

    if (!email) {
      setError('Please provide a valid email address!');
      return;
    }

    // Clear error if validation passes
    setError('');

    // Placeholder logic for password reset
    alert(`Password reset link sent to ${email}`);
    navigate('/choose-user'); // Redirect to Choose User page after submission
  };

  const handleBackToSignIn = () => {
    navigate('/choose-user'); // Navigate back to the "Choose User" page
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        margin: '0 auto',
        padding: 4,
        borderRadius: 2,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: 'white',
      }}
    >
      {/* Header */}
      <Typography variant="h4" align="center" gutterBottom>
        Reset Your Password
      </Typography>

      {/* Error Alert */}
      {error && (
        <Alert severity="error" sx={{ marginBottom: 2 }}>
          {error}
        </Alert>
      )}

      {/* Reset Password Form */}
      <Box component="form" onSubmit={handleResetPassword} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          fullWidth
          id="email"
          label="Email Address"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button type="submit" variant="contained" fullWidth>
          Reset Password
        </Button>
      </Box>

      {/* Back to Sign In */}
      <Button
        onClick={handleBackToSignIn}
        variant="outlined"
        fullWidth
        sx={{ marginTop: 2 }}
      >
        Back to Sign In
      </Button>
    </Box>
  );
};

export default ForgotPassword;
