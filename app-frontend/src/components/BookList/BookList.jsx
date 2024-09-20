import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useRef } from 'react';
import s from './BookList.module.css';
import BookItem from '../BookItem';

const BookList = ({ books, error, handleDeleteBook, editBook }) => {
  const nodeRef = useRef(null);

  if (error) {
    console.log('error:', error);
    return <h3>There is a server error</h3>;
  }
  if (Array.isArray(books)) {
    return books.length > 0 ? (
      <TransitionGroup component="ul" className={s.bookList}>
        {books.map((book) => (
          <CSSTransition
            key={book._id}
            timeout={500}
            nodeRef={nodeRef}
            classNames={{ ...s }}
          >
            <li className={s.bookItem} ref={nodeRef}>
              <BookItem
                book={book}
                handleDeleteBook={handleDeleteBook}
                editBook={editBook}
              />
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    ) : (
      <p>There are no books.</p>
    );
  }
};

export default BookList;
