// eslint-disable

import React from 'react';
import Proptypes from 'prop-types';

function Book({ title, author }) {
  return (
    <div>
      <h2>{title}</h2>
      <span>{author}</span>
      <div className="actions">
        <button type="button">Remove</button>
      </div>
    </div>
  );
}

export default Book;

Book.propTypes = {
  title: Proptypes.string.isRequired,
  author: Proptypes.string.isRequired,
};
