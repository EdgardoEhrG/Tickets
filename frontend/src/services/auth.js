import axios from "axios";

const API_ENDPOINT = "http://localhost:3000";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const signUpUser = async (userData) => {
  const res = await axios.post(`${API_ENDPOINT}/register`, userData, config);
  return res;
};

export const signInUser = async (userData) => {
  const res = await axios.post(`${API_ENDPOINT}/login`, userData, config);
  return res;
};
