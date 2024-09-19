import { useState } from "react";
import useFetchBooks from "./hooks/useFetchBooks";
import Button from "./components/Button/Button";
import Container from "./components/Container";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import Loader from "./components/Loader";

function App() {
  const { data, error, loading } = useFetchBooks();
  const [currentBook, setCurrentBook] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [books, setBooks] = useState([]);

  const addBook = (newBook) => {
    setBooks([...books, { ...newBook, id: books.length + 1 }]);
  };

  const updateBook = (updatedBook) => {
    setBooks(
      books.map((book) => (book.id === updatedBook.id ? updatedBook : book))
    );
    setCurrentBook(null);
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
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
      {loading ? <Loader /> : <BookList books={data} error={error} />}
    </Container>
  );
}

export default App;
