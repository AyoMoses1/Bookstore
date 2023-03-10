import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

function Categories() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categoriesReducer.status);
  return (
    <>
      <div>{status}</div>
      <button type="button" className="categories-btn" onClick={() => dispatch(checkStatus())}>Check status</button>
    </>
  );
}

export default Categories;
