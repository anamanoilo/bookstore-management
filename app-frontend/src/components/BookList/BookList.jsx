import { TransitionGroup, CSSTransition } from 'react-transition-group';

import s from './BookList.module.css';
// import './BookList.module.css';
import BookItem from '../BookItem';
import Button from '../Button';

const BookList = ({ books, error, handleDeleteBook, editBook }) => {
  if (error) {
    return <h3>There is a server error</h3>;
  }
  if (Array.isArray(books)) {
    return books.length > 0 ? (
      <TransitionGroup component="ul" className={s.bookList}>
        {books.map((book) => (
          <CSSTransition key={book._id} timeout={500} classNames={{ ...s }}>
            <li className={s.bookItem}>
              <BookItem
                title={book.title}
                price={book.price}
                author={book.author}
                quantity={book.quantity}
                // id={book._id}
                // handleDeleteBook={handleDeleteBook}
                // editBook={editBook}
              />
              <div>
                <Button
                  btnClass="editButton"
                  type="button"
                  onClick={() => editBook(book)}
                >
                  EDIT
                </Button>
                <Button
                  btnClass="deleteButton"
                  type="button"
                  onClick={() => handleDeleteBook(book._id)}
                >
                  DELETE
                </Button>
              </div>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    ) : (
      <p>There are no books.</p>
    );
  }
};

BookList.propTypes = {};

export default BookList;
