import React, { useState } from "react";
import {
  HomeIcon,
  UserIcon,
  ChatIcon,
  QuestionMarkCircleIcon,
  DocumentReportIcon,
} from "@heroicons/react/solid";
import Home from "./components/dashboardcomponents/Home";
import UserManagement from "./components/dashboardcomponents/UserManagement";
import ChatSystem from "./components/dashboardcomponents/ChatSystem";
import Questionnaire from "./components/dashboardcomponents/Questionnaire";
import Reports from "./components/dashboardcomponents/Reports";
import MCQForm from "./components/MCQForm";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-white text-black">
      {/* Sidebar with backdrop-filter */}
      <div
        className="bg-gradient-to-b from-red-700 via-blue-600 to-purple-600 text-white w-64 flex flex-col"
        style={{ backdropFilter: "blur(4px)" }}
      >
        <div className="p-4">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>
        <nav className="flex-grow">
          <ul className="space-y-4">
            <li>
              <button
                className={`flex items-center w-full py-2 px-4 text-left rounded-lg ${
                  activeTab === "home" ? "bg-gray-900" : ""
                }`}
                onClick={() => handleTabChange("home")}
              >
                <HomeIcon className="h-6 w-6 mr-2" />
                Home
              </button>
            </li>
            <li>
              <button
                className={`flex items-center w-full py-2 px-4 text-left rounded-lg ${
                  activeTab === "userManagement" ? "bg-gray-900" : ""
                }`}
                onClick={() => handleTabChange("userManagement")}
              >
                <UserIcon className="h-6 w-6 mr-2" />
                User Management
              </button>
            </li>
            <li>
              <button
                className={`flex items-center w-full py-2 px-4 text-left rounded-lg${
                  activeTab === "chatSystem" ? "bg-gray-900" : ""
                }`}
                onClick={() => handleTabChange("chatSystem")}
              >
                <ChatIcon className="h-6 w-6 mr-2" />
                Chat System
              </button>
            </li>
            <li>
              <button
                className={`flex items-center w-full py-2 px-4 text-left rounded-lg ${
                  activeTab === "questionnaire" ? "bg-gray-900" : ""
                }`}
                onClick={() => handleTabChange("questionnaire")}
              >
                <QuestionMarkCircleIcon className="h-6 w-6 mr-2" />
                Questionnaire
              </button>
            </li>
            <li>
              <button
                className={`flex items-center w-full py-2 px-4 text-left rounded-lg${
                  activeTab === "reports" ? "bg-gray-900" : ""
                }`}
                onClick={() => handleTabChange("reports")}
              >
                <DocumentReportIcon className="h-6 w-6 mr-2" />
                Reports
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-8">
        {activeTab === "home" && <Home />}
        {activeTab === "userManagement" && <UserManagement />}
        {activeTab === "chatSystem" && <ChatSystem />}
        {activeTab === "questionnaire" && <Questionnaire />}
        {activeTab === "reports" && <Reports />}
      </div>
    </div>
  );
};

export default Dashboard;
