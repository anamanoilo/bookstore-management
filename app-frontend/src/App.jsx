import { useState } from 'react';
import useFetchAndSetBooks from './hooks/useFetchAndSetBooks';
import Button from './components/Button/Button';
import Container from './components/Container';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import Loader from './components/Loader';
import Modal from './components/Modal';
import { addBook, deleteBook, updateBook } from './services/booksAPI';

function App() {
  const { books, setBooks, error, loading } = useFetchAndSetBooks();
  const [currentBook, setCurrentBook] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentBook(null);
  };

  const handleAddBook = async (newBook) => {
    try {
      const addedBook = await addBook(newBook);
      setBooks([...books, addedBook]);
      closeModal();
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  const handleUpdateBook = async (bookToUpdate) => {
    try {
      const updatedBook = await updateBook(bookToUpdate);
      setBooks(
        books.map((book) =>
          book._id === updatedBook._id ? updatedBook : book,
        ),
      );
    } catch (error) {
      console.error('Error updating book:', error);
    } finally {
      setCurrentBook(null);
      closeModal();
    }
  };

  const handleDeleteBook = async (id) => {
    try {
      await deleteBook(id);
      setBooks(books.filter((book) => book._id !== id));
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  const editBook = (book) => {
    setCurrentBook(book);
    openModal();
  };

  return (
    <Container>
      <h2>Bookstore Inventory Manager</h2>
      <Button btnClass="actionButton" type="button" onClick={openModal}>
        ADD BOOK
      </Button>
      {isModalOpen && (
        <Modal closeModal={closeModal}>
          <BookForm
            handleAddBook={handleAddBook}
            handleUpdateBook={handleUpdateBook}
            currentBook={currentBook}
          />
        </Modal>
      )}
      {loading ? (
        <Loader />
      ) : (
        <BookList
          books={books}
          error={error}
          editBook={editBook}
          handleDeleteBook={handleDeleteBook}
        />
      )}
    </Container>
  );
}

export default App;
