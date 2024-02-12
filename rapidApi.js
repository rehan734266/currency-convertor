import axios from "axios";




const getNumbersApiData = async () => {
  const baseURL = 'https://numbersapi.p.rapidapi.com';

  const headers = {
    'X-RapidAPI-Key': 'c5f2485f91mshed263a194501e3dp101f49jsnd441bcf4147e',
    'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
  };

  const options = {
    method: 'GET',
    url: '/6/21/date', // You can adjust the endpoint as needed
    params: {
      fragment: 'true',
      json: 'true'
    },
    headers: headers
  };

  try {
    const response = await axios.request({
      baseURL,
      ...options
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Example usage
export const fetchData = async () => {
  try {
    const data = await getNumbersApiData();
    console.log(data);
  } catch (error) {
    console.error('Failed to fetch data:', error.message);
  }
};

fetchData();
