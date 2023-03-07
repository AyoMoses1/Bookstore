import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books : []
}

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook : (state, action) => {
      state.books+=action.payload
    },
    removeBook : (state, action) => {
      state.books.filter(book => book.id !== action.payload)
    }
  }
})