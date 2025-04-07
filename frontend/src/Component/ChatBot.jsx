import React, { useState } from "react";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false); // Track whether the chatbot window is open
  const [messages, setMessages] = useState([
    { text: "Hi there! How can I assist you?", sender: "bot" },
  ]); // Default chatbot messages
  const [input, setInput] = useState(""); // User's message input

  const handleToggle = () => {
    setIsOpen(!isOpen); // Toggle chatbot window open/close
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;

    // Add user message
    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");

    // Add bot reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "I'm here to help you with your queries!", sender: "bot" },
      ]);
    }, 500);
  };

  return (
    <Box sx={{ position: "fixed", bottom: 16, right: 16, zIndex: 1000 }}>
      <Button
        variant="contained"
        color="primary"
        onClick={handleToggle}
        sx={{ marginBottom: isOpen ? 2 : 0 }}
      >
        {isOpen ? "Close Chat" : "Chat with us"}
      </Button>

      {isOpen && (
        <Paper
          elevation={3}
          sx={{
            width: 300,
            height: 400,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          {/* Chat Messages */}
          <Box
            sx={{
              flex: 1,
              overflowY: "auto",
              padding: 2,
              backgroundColor: "#f5f5f5",
            }}
          >
            {messages.map((msg, index) => (
              <Box
                key={index}
                sx={{
                  marginBottom: 2,
                  textAlign: msg.sender === "bot" ? "left" : "right",
                }}
              >
                <Typography
                  sx={{
                    display: "inline-block",
                    padding: 1,
                    borderRadius: 2,
                    backgroundColor:
                      msg.sender === "bot" ? "#e0e0e0" : "#3f51b5",
                    color: msg.sender === "bot" ? "#000" : "#fff",
                  }}
                >
                  {msg.text}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Input Field */}
          <Box
            component="form"
            onSubmit={handleSend}
            sx={{
              display: "flex",
              padding: 2,
              borderTop: "1px solid #ddd",
              backgroundColor: "#fff",
            }}
          >
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ marginLeft: 1 }}
            >
              Send
            </Button>
          </Box>
        </Paper>
      )}
    </Box>
  );
};

export default ChatBot;
