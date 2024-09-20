import React from "react";
import s from "./BookItem.module.css";
import Button from "../Button/Button";

export const BookItem = ({ book, editBook, handleDeleteBook }) => {
  const { title, author, quantity, price } = book;
  return (
    <div className={s.wrapper}>
      <div>
        <h5>{title}</h5>
        <p>author: {author}</p>
        <p>price: ${price}</p>
        <p>quantity: {quantity}</p>
      </div>
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
    </div>
  );
};

export default BookItem;
