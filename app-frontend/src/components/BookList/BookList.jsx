
import s from "./BookList.module.css";
import BookItem from "../BookItem";

const BookList = ({ books, error }) => {
  if (error) {
    return <h3>There is a server error</h3>;
  }
  if (books.length > 0) {
    return (
      <ul>
        {books.map(({ id, title, author, price, quantity }) => (
          <li key={id} className={s.bookItem}>
            <BookItem
              title={title}
              price={price}
              author={author}
              quantity={quantity}
              id={id}
            />
          </li>
        ))}
      </ul>
    );
  }
};

BookList.propTypes = {};

export default BookList;
