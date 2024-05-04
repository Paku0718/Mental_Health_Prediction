import React, { useState } from "react";
import axiosInstance from "../../axiosInstance";
import useAuthStore, { checkUserIdOrLocalStorage } from "../../store";

const Reports = () => {
  const [userName, setUserName] = useState(""); // State to store userName
  const [reportData, setReportData] = useState([]);
  const userId = checkUserIdOrLocalStorage();

  const handleGetReport = async () => {
    try {
      const response = await axiosInstance.get(`/${userId}/user-name`);
      setUserName(response.data.userName);
      setReportData(response.data);
    } catch (error) {
      console.error("Error fetching user name:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded-lg shadow-lg bg-white">
      <h2 className="text-2xl font-bold mb-4">User Report</h2>
      {/* Button to fetch user name with animation on click */}
      <button
        onClick={handleGetReport}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
      >
        Get Your Report
      </button>
      {/* Display user name with fade-in effect when fetched */}
      {userName && (
        <p className="mt-4 text-lg text-gray-800 animate-fade-in">
          User Name: {userName}
        </p>
      )}
      <div className="overflow-y-auto h-[98vh]">
        {reportData.map((item) => (
          <div key={item.reportId}>
            <p> Report ID: </p>
            <p>{item.reportId}</p>
            <br></br>
            <p> User Name </p>
            <p>{item.userName}</p>
            {item.mental_state}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;
