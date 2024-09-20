import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import useFetchAndSetBooks from './hooks/useFetchAndSetBooks';
import Button from './components/Button/Button';
import Container from './components/Container';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import Loader from './components/Loader';
import Modal from './components/Modal';
import { addBook, deleteBook, updateBook } from './services/booksAPI';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  const { books, setBooks, error, loading } = useFetchAndSetBooks();
  const [currentBook, setCurrentBook] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorStatus, setErrorStatus] = useState(null);

  useEffect(() => {
    if (errorStatus) {
      let message = '';
      switch (errorStatus) {
        case 404:
          message = 'Error: Not found';
          break;
        case 400:
          message = 'Error: Please check your data and try again';
          break;
        default:
          message = 'Error: Something went wrong';
      }
      toast.error(message);
      setErrorStatus(null);
    }
  }, [errorStatus]);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentBook(null);
    document.body.style.overflow = 'unset';
  };

  const handleAddBook = async (newBook) => {
    try {
      const addedBook = await addBook(newBook);
      setBooks([...books, addedBook]);
      closeModal();
      toast.success('Book added successfully');
    } catch (error) {
      console.error('Error adding book:', error);
      setErrorStatus(error.status);
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
      closeModal();
      toast.success('Book updated successfully');
    } catch (error) {
      console.error('Error updating book:', error);
      setErrorStatus(error.status);
    }
  };

  const handleDeleteBook = async (id) => {
    try {
      await deleteBook(id);
      setBooks(books.filter((book) => book._id !== id));
      toast.success('Book deleted successfully');
    } catch (error) {
      console.error('Error deleting book:', error);
      setErrorStatus(error.status);
    }
  };

  const editBook = (book) => {
    setCurrentBook(book);
    openModal();
  };

  return (
    <Container>
      <h2 className="title">Bookstore Inventory Manager</h2>
      <div className="addBookSection">
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
      </div>

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
      <ToastContainer />
    </Container>
  );
}

export default App;
