import React, { useReducer, useEffect } from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import s from './BookForm.module.css';

const initialState = {
  title: '',
  author: '',
  quantity: '',
  price: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.field]: action.value };
    case 'RESET':
      return initialState;
    case 'SET_FORM':
      return action.payload;
    default:
      return state;
  }
};

const BookForm = ({ handleAddBook, handleUpdateBook, currentBook }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { title, author, quantity, price } = state;

  // Populate form if currentBook is passed for editing
  useEffect(() => {
    if (currentBook) {
      dispatch({ type: 'SET_FORM', payload: currentBook });
    } else {
      dispatch({ type: 'RESET' });
    }
  }, [currentBook]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'SET_FIELD', field: name, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      title,
      author,
      quantity: parseInt(quantity, 10),
      price: parseFloat(price).toString(),
    };

    if (currentBook) {
      handleUpdateBook({ ...currentBook, ...newBook });
    } else {
      handleAddBook(newBook);
    }
    dispatch({ type: 'RESET' });
  };

  return (
    <div>
      <h3>{currentBook ? 'Update Book' : 'Add a new Book'}</h3>
      <form onSubmit={handleSubmit} className={s.form}>
        <input
          type="text"
          name="title"
          min="1"
          max="200"
          placeholder="Title"
          value={title}
          onChange={handleChange}
          className={s.input}
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={author}
          onChange={handleChange}
          className={s.input}
          required
        />
        <input
          type="number"
          name="quantity"
          min="0"
          step="1"
          placeholder="Quantity"
          value={quantity}
          onChange={handleChange}
          className={s.input}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={price}
          onChange={handleChange}
          className={s.input}
          required
        />
        <Button type="submit" btnClass="actionButton">
          {currentBook ? 'UPDATE BOOK' : 'ADD BOOK'}
        </Button>
      </form>
    </div>
  );
};

BookForm.propTypes = {
  handleAddBook: PropTypes.func.isRequired,
  handleUpdateBook: PropTypes.func.isRequired,
  currentBook: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number,
  }),
};

export default BookForm;
