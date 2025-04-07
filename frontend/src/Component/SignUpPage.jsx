import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  Alert,
} from '@mui/material'; // Import Material-UI components

const SignUpPage = () => {
  // State hooks for user input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const [error, setError] = useState(''); // State for error message
  const navigate = useNavigate(); // Initialize navigate for programmatic navigation

  // Function to handle the sign-up process
  const handleSignUp = (e) => {
    e.preventDefault();

    // Password matching validation
    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    // Terms and Conditions acceptance validation
    if (!termsAccepted) {
      setError('Please accept the Terms & Conditions.');
      return;
    }

    // Clear error state if validations pass
    setError('');

    // Success logic
    console.log('Sign-up Details:', { email, password });
    alert('Signed up successfully!');

    // Redirect to ChooseUser page after successful sign-up
    navigate('/choose-user'); // Navigate to the ChooseUser route
  };

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 400,
        margin: '0 auto',
        padding: 4,
        borderRadius: 2,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: 'white',
      }}
    >
      {/* Sign-up Header */}
      <Box sx={{ marginBottom: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Register Your Account
        </Typography>
        <Typography variant="body1" align="center">
          Join us and unlock the best educational experience.
        </Typography>
      </Box>

      {/* Display Error Message */}
      {error && (
        <Alert severity="error" sx={{ marginBottom: 2 }}>
          {error}
        </Alert>
      )}

      {/* Sign-up Form */}
      <form onSubmit={handleSignUp}>
        <TextField
          fullWidth
          type="email"
          label="Your Email *"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          sx={{ marginBottom: 2 }}
        />
        <TextField
          fullWidth
          type="password"
          label="Choose Password *"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          sx={{ marginBottom: 2 }}
        />
        <TextField
          fullWidth
          type="password"
          label="Confirm Password *"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          sx={{ marginBottom: 2 }}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
            />
          }
          label={
            <Typography variant="body2">
              Accept our{' '}
              <Link href="/terms" underline="hover">
                Terms & Conditions
              </Link>
            </Typography>
          }
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ marginTop: 2 }}
        >
          Sign up
        </Button>
      </form>

      {/* Login Redirect */}
      <Box sx={{ marginTop: 2, textAlign: 'center' }}>
        <Link href="/choose-user" underline="hover">
          Already have an account? Login
        </Link>
      </Box>
    </Box>
  );
};

export default SignUpPage;
