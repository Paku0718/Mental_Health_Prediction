// src/components/MCQForm.jsx
import React, { useState } from "react";
import axios from "axios";

const Questionnaire = () => {
  const [responses, setResponses] = useState({});
  const [userId, setuserId] = useState(123);


  const questions = [
    {
      id: 1,
      question: "How are you feeling emotionally today?",
    },
    {
      id: 2,
      question:
        "Have you experienced any significant changes in your mood recently?",
    },
    {
      id: 3,
      question: "Are you able to sleep well at night?",
    },
    {
      id: 4,
      question: "Have you lost interest in activities you once enjoyed?",
    },
    {
      id: 5,
      question: "Do you find it difficult to concentrate or make decisions?",
    },
    {
      id: 6,
      question:
        "Have you experienced any significant stressors or traumas recently?",
    },
    {
      id: 7,
      question:
        "Do you have a support system or someone you can talk to when you're feeling down?",
    },
    {
      id: 8,
      question:
        "Have you noticed any changes in your appetite or eating habits?",
    },
    {
      id: 9,
      question:
        "How would you rate your overall level of energy and motivation?",
    },
    {
      id: 10,
      question: "Have you had any thoughts of harming yourself or others?",
    },
    {
      id: 11,
      question: "How do you cope with stress or difficult emotions?",
    },
    {
      id: 12,
      question: "Do you feel overwhelmed by responsibilities or obligations?",
    },
    {
      id: 13,
      question:
        "Are you satisfied with your relationships and social connections?",
    },
    {
      id: 14,
      question:
        "Do you engage in activities or hobbies that promote relaxation and well-being?",
    },
    {
      id: 15,
      question: "Have you sought professional help or therapy in the past?",
    },
    // Add more questions here
  ];

  const handleOptionChange = async (questionId, option) => {
    const item = await questions.filter((item) => item.id === questionId);
    const question=item[0].question;
    setResponses((prevResponses) => ({
      ...prevResponses,
      [question]: option,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(responses,'response');
    try {
      const Data = await axios.post(`http://localhost:3000/${userId}/mental-health`,responses );
     
      console.log(Data,'Data');

      // Reset the form or perform any other actions
    } catch (error) {
      console.error("Error saving response:", error);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">MCQ Form</h1>
      <div className="overflow-y-auto max-h-96">
        <form onSubmit={handleSubmit} className="space-y-8">
          {questions.map((question) => (
            <div
              key={question.id}
              className="p-6 bg-white rounded-lg shadow-md"
            >
              <h2 className="text-xl font-bold mb-4">{question.question}</h2>
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
        </form>
      </div>
      <div className="mt-8 flex justify-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Questionnaire;
