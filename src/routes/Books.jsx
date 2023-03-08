import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from '../components/Book';
import Form from '../components/Form';
import { addBook } from '../redux/books/booksSlice';

const initialValues = {
  title: '',
  author: '',
  category: '',
};

function Books() {
  const [state, setState] = useState(initialValues);
  const booksArray = useSelector((state) => state.booksReducer.books);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value, item_id: `item${booksArray.length + 1}` }));
  };
  const handleSubmit = () => {
    dispatch(addBook(state));
  };
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
      <Form handleDispatch={handleSubmit} handleChange={handleChange} />
    </>
  );
}

export default Books;
