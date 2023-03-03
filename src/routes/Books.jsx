import React from 'react';
import Book from '../components/Book';

const booksArray = [
  {
    id: 1,
    author: 'The Hunter Games',
    title: 'Suzanne Collins',
  },
  {
    id: 2,
    author: 'Dune',
    title: 'Frank Hebert',
  },
  {
    id: 3,
    author: 'Capital in the Twenty-First Century',
    title: 'Suzanne Collins',
  },
];

function Books() {
  return (
    <>
      {booksArray.map((data) => <Book key={data.id} title={data.title} author={data.author} />)}
    </>
  );
}

export default Books;
