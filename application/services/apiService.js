import axios from 'axios';

const BASE_URL = 'https://6464f6cb228bd07b353e4919.mockapi.io/api/vi';

const apiService = {
  getAllUsers: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/users`);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  },
};

export default apiService;
