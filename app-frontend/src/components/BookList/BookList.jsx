import { TransitionGroup, CSSTransition } from 'react-transition-group';

import s from "./BookList.module.css";
import BookItem from '../BookItem';

const BookList = ({ books, error, handleDeleteBook, editBook }) => {
  if (error) {
    return <h3>There is a server error</h3>;
  }
  if (Array.isArray(books)) {
    return books.length > 0 ? (
      <TransitionGroup component="ul" className={s.bookList}>
        {books.map((book) => (
          <li key={book._id} className={s.bookItem}>
            <BookItem
              book={book}
              handleDeleteBook={handleDeleteBook}
              editBook={editBook}
            />
          </li>
        ))}
      </TransitionGroup>
    ) : (
      <p>There are no books.</p>
    );
  }
};

BookList.propTypes = {};

export default BookList;
