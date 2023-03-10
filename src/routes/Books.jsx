import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from '../components/Book';
import Form from '../components/Form';
import { fetchBooks } from '../redux/books/booksSlice';

function Books() {
  const booksArray = useSelector((state) => state.booksReducer.books);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <>
      {booksArray.length > 0 ? booksArray.map(
        (data) => (
          <Book
            key={data.item_id}
            title={data.title}
            author={data.author}
            id={data.item_id}
            category={data.category}
          />
        ),
      ) : ''}
      <div className="divider" />
      <Form />
    </>
  );
}

export default Books;
