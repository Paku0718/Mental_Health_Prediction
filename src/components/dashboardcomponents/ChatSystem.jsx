// src/components/ChatBot.jsx
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { FaUserCircle, FaRobot } from "react-icons/fa";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = async () => {
    if (userInput.trim() === "") return;

    const newMessage = { sender: "user", text: userInput };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setUserInput("");

    try {
      const response = await axios.post("/api/chatbot", { message: userInput });
      const chatbotResponse = {
        sender: "chatbot",
        text: response.data.message,
      };
      setMessages((prevMessages) => [...prevMessages, chatbotResponse]);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">ChatBot</h1>
      <div className="flex flex-col h-96 bg-gray-100 rounded-lg overflow-y-auto">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg my-2 flex items-start ${
              message.sender === "user"
                ? "bg-blue-500 text-white self-end"
                : "bg-gray-300 self-start"
            }`}
          >
            {message.sender === "user" ? (
              <FaUserCircle className="h-6 w-6 mr-2" />
            ) : (
              <FaRobot className="h-6 w-6 mr-2" />
            )}
            <span>{message.text}</span>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="mt-4 flex">
        <input
          type="text"
          value={userInput}
          onChange={handleUserInput}
          placeholder="Type your message..."
          className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
