import React from 'react';

function Form() {
  return (
    <form action="#" method="post" className="contact_form">
      <h1>ADD NEW BOOK</h1>
      <input className="form_item" id="book_title" type="text" name="book_title" placeholder="Book title" maxLength="30" required />
      <input className="form_item" id="book_author" type="text" name="book_author" placeholder="Author" required />
      <button type="button" className="form_button">ADD BOOK</button>
    </form>
  );
}

export default Form;
