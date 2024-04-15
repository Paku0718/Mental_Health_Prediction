import React, { useState, useEffect } from "react";

const Reports = () => {
  const [mentalState, setMentalState] = useState("");

  useEffect(() => {
    const fetchMentalHealthData = async () => {
      try {
        const userId = "your_user_id"; // Replace with the actual user ID
        const response = await fetch(`/api/mental-health/${userId}`);
        const data = await response.json();

        if (response.ok) {
          setMentalState(data.mental_state);
        } else {
          console.error("Error fetching mental health data:", data.message);
        }
      } catch (error) {
        console.error("Error fetching mental health data:", error);
      }
    };

    fetchMentalHealthData();
  }, []);

  return (
    <div>
      <h1>Mental Health Report</h1>
      <p>Mental State: {mentalState}</p>
    </div>
  );
};

export default Reports;
