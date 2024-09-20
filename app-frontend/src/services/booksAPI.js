
const API_URL = import.meta.env.VITE_API_URL;

export const getBooks = async () => {
  const response = await fetch(`${API_URL}/books`);
  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }
  const data = await response.json();
  return data;
};

export const addBook = async (newBook) => {
  const response = await fetch(`${API_URL}/books`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newBook),
  });
  if (!response.ok) {
    throw new Error("Failed to add book");
  }
  const data = await response.json();
  return data;
};

export const updateBook = async (updatedBook) => {
  const response = await fetch(`${API_URL}/books/${updatedBook._id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedBook),
  });
  if (!response.ok) {
    throw new Error("Failed to update book");
  }
  const data = await response.json();
  return data;
};

export const deleteBook = async (id) => {
  const response = await fetch(`${API_URL}/books/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error("Failed to delete book");
  }
  return id;
};
