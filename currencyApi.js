import axios from "axios";
// const axios = require('axios');

const BASE_URL = 'https://currency-exchange.p.rapidapi.com';
const API_KEY = 'c5f2485f91mshed263a194501e3dp101f49jsnd441bcf4147e';
const API_HOST = 'currency-exchange.p.rapidapi.com';

const headers = {
  'X-RapidAPI-Key': API_KEY,
  'X-RapidAPI-Host': API_HOST,
};

export const getListOfQuotes = async () => {
  const options = {
    method: 'GET',
    url: `${BASE_URL}/listquotes`,
    headers: headers,
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// module.exports = { getListOfQuotes };

