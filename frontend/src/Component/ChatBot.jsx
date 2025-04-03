import React, { useState } from 'react';
import './ChatBot.css'; // Import the CSS for styling

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
    <div className="chatbot-container">
      <button className="chatbot-toggle" onClick={handleToggle}>
        {isOpen ? "Close Chat" : "Chat with us"}
      </button>

      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chatbot-message ${
                  msg.sender === "bot" ? "bot-message" : "user-message"
                }`}
              >

 
                {msg.text}
              </div>
            ))}
          </div>
          <form className="chatbot-input-container" onSubmit={handleSend}>
            <input
              type="text"
              className="chatbot-input"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="chatbot-send">
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
