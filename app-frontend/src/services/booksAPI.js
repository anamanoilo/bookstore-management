import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

export const getBooks = async () => {
  const response = await axios.get('/books');
  return response.data;
};

export const addBook = async (newBook) => {
  const response = await axios.post('/books', newBook, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
};

export const updateBook = async (updatedBook) => {
  const response = await axios.patch(`/books/${updatedBook._id}`, updatedBook, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
};

export const deleteBook = async (id) => {
  await axios.delete(`/books/${id}`);
  return id;
};
