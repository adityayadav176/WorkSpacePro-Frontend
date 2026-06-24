import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: true, // 🌟 FIXED: Axios uses this exact boolean flag
  headers: {
    "Content-Type": "application/json"
  }
});

export default api;