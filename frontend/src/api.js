import axios from "axios";

const API = axios.create({
  baseURL: "https://task-manager-1-8pfu.onrender.com"
});

export default API;
