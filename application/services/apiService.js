import axios from 'axios';

// Set the base URL for your API
const BASE_URL = 'http://localhost:3000'; // Change this to match your API endpoint

const apiService = {
  // Function to get all users
  getAllUsers: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/users`);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  },

  getUserLogin: async (email, password) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/users/${email},${password}`,
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  },
};

export default apiService;
