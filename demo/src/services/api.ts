import axios from 'axios';

const BACKEND_URL = 'https://api.github.com/users/';

export const createApi = () => {
  const api = axios.create({
    baseURL: BACKEND_URL    
  });

  return api;
};
