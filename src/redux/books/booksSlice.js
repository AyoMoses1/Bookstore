import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  books: [],
  status: 'idle',
  error: '',
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

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      const newState = { ...state };
      newState.books = state.books.filter((book) => book.item_id !== action.payload);
      return newState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state, action) => {
      state.status = 'Loading...';
    }),
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.books = action.payload;
      state.status = 'fulfilled';
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
