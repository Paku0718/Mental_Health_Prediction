import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Login from "./Login.jsx";
import Registration from "./Registration.jsx";
import Dashboard from "./Dashboard.jsx";
// import MCQForm from "./components/MCQForm.jsx";
// import ChatBot from "./components/ChatBot.jsx";
import ChatSystem from "./components/dashboardcomponents/ChatSystem.jsx";
import Questionnaire from "./components/dashboardcomponents/Questionnaire.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import Test from "./components/Test.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/test" element={<Test/>} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/MCQForm"
          element={
            <ProtectedRoute>
              <Questionnaire />
            </ProtectedRoute>
          }
        />

        <Route
          path="/ChatBot"
          element={
            <ProtectedRoute>
              <ChatSystem />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  </React.StrictMode>
);
