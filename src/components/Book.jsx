import React from 'react';
import { useDispatch } from 'react-redux';
import Proptypes from 'prop-types';
import { removeBook } from '../redux/books/booksSlice';
import style from '../styles/Book.module.css';

function Book({
  title, author, id, category,
}) {
  const dispatch = useDispatch();
  return (
    <div className={style.container}>
      <div className={style.bookDetails}>
        <p className={style.category}>{category}</p>
        <h2 className={style.title}>{title}</h2>
        <span className={style.author}>{author}</span>
        <div className={style.actions}>
          <button type="button" className={style.button}>Comments</button>
          <span className="div" />
          <button type="button" className={style.button} onClick={() => dispatch(removeBook(id))}>Remove</button>
          <span className="div" />
          <button type="button" className={style.button}>Edit</button>
        </div>
      </div>
      <div className={style.statistics}>
        <div className={style.oval}>
          <div className={style.circularProgress} />
        </div>
        <div>
          <h2 className={style.score}>64%</h2>
          <span className={style.completed}>completed</span>
        </div>
      </div>
      <div className="chapter">
        <span className={style.chapter}>CURRENT CHAPTER</span>
        <h3 className={style.chapterName}>Chapter 17</h3>
        <button type="button" className={style.chapterButton}>UPDATE PROGRESS</button>
      </div>
    </div>
  );
}

export default Book;

Book.propTypes = {
  title: Proptypes.string.isRequired,
  author: Proptypes.string.isRequired,
  id: Proptypes.string.isRequired,
  category: Proptypes.string.isRequired,
};
