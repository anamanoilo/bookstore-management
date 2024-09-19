
const API_URL = import.meta.env.VITE_API_URL;

export const getBooks = async () => {
  const response = await fetch(`${API_URL}/books`);
  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }
  const data = await response.json();
  console.log("data:", data);
  return data;
};

export const addBook = async (newBook) => {
  try {
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
  } catch (error) {
    console.error("Error adding book:", error);
    throw error;
  }
};

export const updateBook = async (updatedBook) => {
  try {
    const response = await fetch(`${API_URL}/books/${updatedBook.id}`, {
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
  } catch (error) {
    console.error("Error updating book:", error);
    throw error;
  }
};

export const deleteBook = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete book");
    }
    return id; 
  } catch (error) {
    console.error("Error deleting book:", error);
    throw error;
  }
};
