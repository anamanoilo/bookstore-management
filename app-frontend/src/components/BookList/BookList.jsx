
import s from "./BookList.module.css";
import BookItem from "../BookItem";

const BookList = ({ books, error }) => {
  if (error) {
    return <h3>There is a server error</h3>;
  }
  if (books) {
    return (
      {books.length > 0 ? (<ul>
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
      </ul>): (<p>No books available.</p>
) }
      
    );
  }
};

BookList.propTypes = {};

export default BookList;
