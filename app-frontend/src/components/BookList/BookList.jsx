// import React from "react";
// import PropTypes from "prop-types";
import useFetchBooks from "../../hooks/useFetchBooks";
import Loader from "../Loader";

const BookList = () => {
  const { books, error, loading } = useFetchBooks();
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <h3>There is a server error</h3>;
  }
  if (books?.length > 0) {
    return (
      <div>
        BookList
        <ul>
          {books.map((book) => (
            <li key={book.id}>{book.title}</li>
          ))}
        </ul>
      </div>
    );
  }
};

BookList.propTypes = {};

export default BookList;
