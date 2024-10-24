import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://hackathon-referral-api.azurewebsites.net",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
