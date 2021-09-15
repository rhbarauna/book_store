import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:3000/api` 
});

const getBooks = async () => {
  const response = await api.get(`/books`);
  return response.data
}

export default api;
export {
  getBooks
};