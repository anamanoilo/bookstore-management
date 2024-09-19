import { useState, useEffect } from "react";
import useFetchAndSetBooks from "./hooks/useFetchAndSetBooks";
import Button from "./components/Button/Button";
import Container from "./components/Container";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import Loader from "./components/Loader";
import { addBook, deleteBook, updateBook } from "./services/booksAPI";

function App() {
  const { books, setBooks, error, loading } = useFetchAndSetBooks();
  const [currentBook, setCurrentBook] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddBook = async (newBook) => {
    try {
      const addedBook = await addBook(newBook);
      setBooks([...books, addedBook]);
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  const handleUpdateBook = async (updatedBook) => {
    try {
      const updated = await updateBook(updatedBook);
      setBooks(books.map((book) => (book.id === updated.id ? updated : book)));
      setCurrentBook(null);
    } catch (error) {
      console.error("Error updating book:", error);
    }
  };

  const handleDeleteBook = async (id) => {
    try {
      await deleteBook(id);
      setBooks(books.filter((book) => book.id !== id));
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  const editBook = (book) => {
    setCurrentBook(book);
  };

  return (
    <Container>
      <h2>Bookstore Inventory Manager</h2>
      <Button btnClass="actionButton" type="button">
        ADD BOOK
      </Button>
      <BookForm
        addBook={addBook}
        updateBook={updateBook}
        currentBook={currentBook}
      />
      {loading ? (
        <Loader />
      ) : (
        <BookList books={books} error={error} editBook={editBook} />
      )}
    </Container>
  );
}

export default App;
