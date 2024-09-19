import React from "react";
import s from "./BookItem.module.css";
import Button from "../Button/Button";

export const BookItem = ({ title, author, quantity, price, id }) => {
  return (
    <div className={s.wrapper} id={id}>
      <div>
        <h5>{title}</h5>
        <p>author: {author}</p>
        <p>price: ${price}</p>
        <p>quantity: {quantity}</p>
      </div>
      <div>
        <Button btnClass="editButton" type="button">
          EDIT
        </Button>
        <Button btnClass="deleteButton" type="button">
          DELETE
        </Button>
      </div>
    </div>
  );
};

export default BookItem;
