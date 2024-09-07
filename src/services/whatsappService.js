// src/services/whatsappService.js
import axios from 'axios';

const validateWhatsappNumber = async (phoneNumber) => {
  const options = {
    method: 'POST',
    url: 'https://whatsapp-number-validator3.p.rapidapi.com/WhatsappNumberHasItWithToken',
    headers: {
      'x-rapidapi-key': '8664a92310mshd2d9f3b7275df93p182c5fjsnae459854c672', // Replace with your actual API key
      'x-rapidapi-host': 'whatsapp-number-validator3.p.rapidapi.com',
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'x-rapidapi-ua': 'RapidAPI-Playground'
    },
    data: {
      phone_number: phoneNumber
    }
  };

  try {
    const response = await axios.request(options);
    console.log('Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error:', error.response?.status, error.response?.data || error.message);
    throw new Error(error.response?.data?.message || 'Failed to validate the number.');
  }
};

export default validateWhatsappNumber;
