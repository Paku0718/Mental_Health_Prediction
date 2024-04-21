import React, { useState, useEffect } from "react";
import { Route, Navigate, useNavigate } from "react-router-dom";
import axiosInstance from "./axiosInstance";

const ProtectedRoute = ({ children, ...rest }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await axiosInstance.get("check-session");
        setIsAuthenticated(response.data.authenticated);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    checkSession();
  }, []);

  // Handle loading state (optional)
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  else{
    return children;
  }
};

export default ProtectedRoute;
