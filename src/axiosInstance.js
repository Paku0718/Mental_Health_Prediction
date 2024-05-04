// src/axiosInstance.js

import axios from 'axios';


const axiosInstance = axios.create({
baseURL: 'http://localhost:3000/', // Set your API base URL here
  withCredentials: true
});

export default axiosInstance;
