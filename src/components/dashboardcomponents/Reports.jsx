import React, { useState, useEffect } from "react";
import axios from "axios";
import axiosInstance from "../../axiosInstance";
import useAuthStore from "../../store";

const Reports = () => {
  const [mentalStates, setMentalStates] = useState([]);
  const userId = useAuthStore((state) => state.userId);
  useEffect(() => {
    const fetchMentalStates = async () => {
      try {
        const response = await axiosInstance.get(`${userId}/mental-state`);
        setMentalStates(response.data);
      } catch (error) {
        console.error("Error fetching mental states:", error);
      }
    };

    fetchMentalStates();
  }, []);

  return (
    <div>
      <h2>Mental States</h2>
      <ul>
        {mentalStates.length > 0 ? (
          mentalStates.map((state, index) => (
            <li key={index}>{state.mental_state}</li>
          ))
        ) : (
          <li>No mental states found</li>
        )}
      </ul>
    </div>
  );
};

export default Reports;
