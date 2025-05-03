// src/services/api.js
import axios from 'axios';

// Create an axios instance
const api = axios.create({
  // Replace with your actual API URL when you build the backend
  baseURL: 'https://api.melodypass.com/api',
  // For development, you might use something like:
  // baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include the auth token in requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('melodypass_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle common errors
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle unauthorized errors (401)
    if (error.response && error.response.status === 401) {
      // Clear token and redirect to login
      localStorage.removeItem('melodypass_token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;