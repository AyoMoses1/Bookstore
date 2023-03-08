import React from 'react';
import Proptypes from 'prop-types';

function Form({ handleDispatch, handleChange }) {
  const handleSubmit = () => {
    handleDispatch();
  };

  return (
    <form action="#" method="post" className="contact_form">
      <h1>ADD NEW BOOK</h1>
      <input className="form_item" id="book_title" type="text" name="title" placeholder="Book title" maxLength="30" onChange={handleChange} required />
      <input className="form_item" id="book_author" type="text" name="author" placeholder="Author" onChange={handleChange} required />
      <button type="button" className="form_button" onClick={handleSubmit}>ADD BOOK</button>
    </form>
  );
}

Form.propTypes = {
  handleDispatch: Proptypes.func.isRequired,
  handleChange: Proptypes.func.isRequired,
};

export default Form;
