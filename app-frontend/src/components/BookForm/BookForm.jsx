import React, { useReducer, useEffect } from "react";
import PropTypes from "prop-types";
import Button from "../Button";

const initialState = {
  title: "",
  author: "",
  quantity: "",
  price: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "RESET":
      return initialState;
    case "SET_FORM":
      return action.payload;
    default:
      return state;
  }
};

const BookForm = ({ addBook, updateBook, currentBook }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { title, author, quantity, price } = state;

  // Populate form if currentBook is passed for editing
  useEffect(() => {
    if (currentBook) {
      dispatch({ type: "SET_FORM", payload: currentBook });
    } else {
      dispatch({ type: "RESET" });
    }
  }, [currentBook]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "SET_FIELD", field: name, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      title,
      author,
      quantity: parseInt(quantity, 10),
      price: parseFloat(price),
    };

    if (currentBook) {
      updateBook({ ...currentBook, ...newBook });
    } else {
      addBook(newBook);
    }
    dispatch({ type: "RESET" });
  };

  return (
    <div>
      <h3>{currentBook ? "Update Book" : "Add a new Book"}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={author}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={quantity}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={price}
          onChange={handleChange}
          required
        />
        <Button type="submit" btnClass="actionButton">
          {currentBook ? "Update Book" : "Add Book"}
        </Button>
      </form>
    </div>
  );
};

BookForm.propTypes = {
  addBook: PropTypes.func,
  updateBook: PropTypes.func,
  currentBook: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number,
  }),
};

export default BookForm;
