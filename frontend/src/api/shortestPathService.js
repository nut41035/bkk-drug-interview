import axios from 'axios';

const apiUrl = `${process.env.REACT_APP_BE_BASE_API_URL}${process.env.REACT_APP_SHORTESTPATH_PATH}`;

const shortestPathService = {
  findPath: async (request) => {
    try {
      const response = await axios.post(`${apiUrl}`, request);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default shortestPathService;
