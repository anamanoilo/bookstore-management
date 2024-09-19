
import s from "./BookList.module.css";
import BookItem from "../BookItem";

const BookList = ({ books, error }) => {
  if (error) {
    return <h3>There is a server error</h3>;
  }
  if (Array.isArray(books)) {
    return books.length > 0 ? (
      <ul>
        {books.map(({ _id, title, author, price, quantity }) => (
          <li key={_id} className={s.bookItem}>
            <BookItem
              title={title}
              price={price}
              author={author}
              quantity={quantity}
              id={_id}
            />
          </li>
        ))}
      </ul>
    ) : (
      <p>There are no books.</p>
    );
  }
};

BookList.propTypes = {};

export default BookList;
