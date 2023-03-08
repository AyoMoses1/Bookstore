// eslint-disable

import React from 'react';
import Proptypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

function Book({ title, author, id }) {
  const dispatch = useDispatch();
  const handleStatus = () => {
    console.log('Check status');
  };
  return (
    <div>
      <h2>{title}</h2>
      <span>{author}</span>
      <div className="actions">
        <button type="button" onClick={() => dispatch(removeBook(id))}>Remove</button>
        <button type="button" onClick={handleStatus}>Check Status</button>
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
