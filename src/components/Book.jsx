import React from 'react';
import { useDispatch } from 'react-redux';
import Proptypes from 'prop-types';
import { removeBook } from '../redux/books/booksSlice';
import { checkStatus } from '../redux/categories/categoriesSlice';

function Book({ title, author, id }) {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>{title}</h2>
      <span>{author}</span>
      <div className="actions">
        <button type="button" onClick={() => dispatch(removeBook(id))}>Remove</button>
        <button type="button" onClick={() => dispatch(checkStatus())}>Check Status</button>
      </div>
    </div>
  );
}

export default Book;

Book.propTypes = {
  title: Proptypes.string.isRequired,
  author: Proptypes.string.isRequired,
  id: Proptypes.string.isRequired,
};
