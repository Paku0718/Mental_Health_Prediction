import React, { useState, useEffect } from "react";
import { Route, Navigate, useNavigate } from "react-router-dom";
import axiosInstance from "./axiosInstance";
import useAuthStore from "./store";
import axios from "axios";

const ProtectedRoute = ({ children, ...rest }) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const setIsAuthenticated=useAuthStore((state)=>state.setIsAuthenticated);
  const loading= useAuthStore((state)=>state.loading);
  const setLoading = useAuthStore((state) => state.setLoading);
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await axiosInstance.get("auth/check-session");
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
  } else {
    return children;
  }
};

export default ProtectedRoute;
