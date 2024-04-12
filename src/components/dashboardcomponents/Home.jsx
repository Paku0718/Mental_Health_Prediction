import React from "react";
import {
  FaRobot,
  FaUsersCog,
  FaComments,
  FaQuestionCircle,
  FaChartBar,
} from "react-icons/fa";

const FeatureCards = () => {
  const features = [
    {
      icon: <FaRobot size={48} />,
      title: "Mental Health Chatbot",
      description:
        "Interact with our AI-powered chatbot for personalized mental health support and guidance.",
    },
    {
      icon: <FaUsersCog size={48} />,
      title: "User Management",
      description:
        "Manage user accounts, roles, and permissions for your organization.",
    },
    {
      icon: <FaComments size={48} />,
      title: "Chat System",
      description:
        "Communicate with mental health professionals and support groups in real-time.",
    },
    {
      icon: <FaQuestionCircle size={48} />,
      title: "Questionnaire",
      description:
        "Complete mental health assessments and track your progress over time.",
    },
    {
      icon: <FaChartBar size={48} />,
      title: "Reports",
      description:
        "Generate detailed reports and insights based on user data and assessments.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 max-w-sm"
        >
          <div className="text-blue-500 mb-4">{feature.icon}</div>
          <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
          <p className="text-gray-700">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureCards;
