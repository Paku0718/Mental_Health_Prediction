// src/components/MCQForm.jsx
import React, { useState } from "react";
import axios from "axios";
import axiosInstance from "../axiosInstance";

const MCQForm = () => {
  const [responses, setResponses] = useState({});

  const questions = [
    {
      id: 1,
      question: "How are you feeling emotionally today?",
    },
    {
      id: 2,
      question: "Do you prefer functional or class components?",
    },
    {
      id: 3,
      question: "Do you prefer functional or class components?",
    },
    {
      id: 4,
      question: "Do you prefer functional or class components?",
    },
    {
      id: 4,
      question: "Do you prefer functional or class components?",
    },
    {
      id: 5,
      question: "Do you prefer functional or class components?",
    },
    {
      id: 6,
      question: "Do you prefer functional or class components?",
    },
    {
      id: 7,
      question: "Do you prefer functional or class components?",
    },
    {
      id: 8,
      question: "Do you prefer functional or class components?",
    },
    {
      id: 9,
      question: "Do you prefer functional or class components?",
    },
    {
      id: 10,
      question: "Do you prefer functional or class components?",
    },
    {
      id: 11,
      question: "Do you prefer functional or class components?",
    },
    {
      id: 12,
      question: "Do you prefer functional or class components?",
    },
    {
      id: 13,
      question: "Do you prefer functional or class components?",
    },
    {
      id: 14,
      question: "Do you prefer functional or class components?",
    },
    {
      id: 15,
      question: "Do you prefer functional or class components?",
    },
    // Add more questions here
  ];

  const handleOptionChange = (questionId, option) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [questionId]: option,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("api/responses", responses);
      console.log("Response saved:", response.data);
      // Reset the form or perform any other actions
    } catch (error) {
      console.error("Error saving response:", error);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">MCQ Form</h1>
      <form onSubmit={handleSubmit}>
        {questions.map((question) => (
          <div key={question.id} className="mb-8">
            <h2 className="text-xl font-bold mb-2">{question.question}</h2>
            <div className="flex">
              <div className="mr-4">
                <input
                  type="radio"
                  id={`question-${question.id}-yes`}
                  name={`question-${question.id}`}
                  value="yes"
                  onChange={() => handleOptionChange(question.id, "yes")}
                  className="mr-2"
                />
                <label htmlFor={`question-${question.id}-yes`}>Yes</label>
              </div>
              <div className="mr-4">
                <input
                  type="radio"
                  id={`question-${question.id}-no`}
                  name={`question-${question.id}`}
                  value="no"
                  onChange={() => handleOptionChange(question.id, "no")}
                  className="mr-2"
                />
                <label htmlFor={`question-${question.id}-no`}>No</label>
              </div>
              <div>
                <input
                  type="radio"
                  id={`question-${question.id}-neutral`}
                  name={`question-${question.id}`}
                  value="neutral"
                  onChange={() => handleOptionChange(question.id, "neutral")}
                  className="mr-2"
                />
                <label htmlFor={`question-${question.id}-neutral`}>
                  Neutral
                </label>
              </div>
            </div>
          </div>
        ))}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default MCQForm;
