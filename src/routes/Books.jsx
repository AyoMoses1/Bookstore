import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';
import Form from '../components/Form';

function Books() {
  const booksArray = useSelector((state) => state.booksReducer.books);
  return (
    <>
      {booksArray.map(
        (data) => (
          <Book
            key={data.item_id}
            title={data.title}
            author={data.author}
            id={data.item_id}
          />
        ),
      )}
      <Form />
    </>
  );
}

export default Books;
