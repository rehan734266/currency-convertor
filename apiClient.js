// apiClient.js
import axios from "axios";

const baseURL = "https://uers-api.p.rapidapi.com/api";

const headers = {
  "content-type": "application/json",
  "X-RapidAPI-Key": "c5f2485f91mshed263a194501e3dp101f49jsnd441bcf4147e",
  "X-RapidAPI-Host": "uers-api.p.rapidapi.com",
};

const apiClient = axios.create({
  baseURL,
  headers,
});

const createUser = async (userData) => {
  try {
    const response = await apiClient.post("/users", userData);
    console.log("User created:", response.data);
  } catch (error) {
    console.error(error);
  }
};


const getUsers = async () => {
    try {
      const response = await apiClient.get("/users");
      console.log("User retrived:", response.data);
      return response?.data?.data
    } catch (error) {
      console.error(error);
    }
  };
// You can define other API functions here, for example:
// const getUser = async (userId) => { ... }

export { createUser, getUsers };
