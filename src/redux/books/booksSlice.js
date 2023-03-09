import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  books: [],
};

const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/LGxYf44oPI6RSiuKvX6C/books';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get(BASE_URL);
    const res = response.data;
    const books = Object.keys(res).map((key) => ({
      item_id: key,
      ...res[key][0],
    }));
    return books;
  } catch (error) {
    return error.message;
  }
});

export const removeBook = createAsyncThunk('books/removeBook', async (id) => {
  try {
    await axios.delete(`${BASE_URL}/${id}`);
    return id;
  } catch (error) {
    return error.message;
  }
});

export const addBook = createAsyncThunk('books/addBook', async (book) => {
  try {
    await axios.post(BASE_URL, book);
    return book;
  } catch (error) {
    return error.message;
  }
});

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      const newState = { ...state };
      newState.books = action.payload;
      return newState;
    });
    builder.addCase(addBook.fulfilled, (state, action) => {
      state.books.push(action.payload);
    });
    builder.addCase(removeBook.fulfilled, (state, action) => {
      const newState = { ...state };
      newState.books = state.books.filter((book) => book.item_id !== action.payload);
      return newState;
    });
  },
});

export default bookSlice.reducer;
