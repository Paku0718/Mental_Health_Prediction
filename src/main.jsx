import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Login from "./Login.jsx";
import Registration from "./Registration.jsx";
import Dashboard from "./Dashboard.jsx";
import MCQForm from "./components/MCQForm.jsx";
import ChatBot from "./components/ChatBot.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/MCQForm" element={<MCQForm />} /> */}
        {/* <Route path="/ChatBot" element={<ChatBot />} /> */}
      </Routes>
    </Router>
  </React.StrictMode>
);
