import { createSlice } from "@reduxjs/toolkit";
import bookDetailsArray from "../datasets/bookDetailsArray";

const bookDetailsSlice = createSlice({
  name: "bookDetails",
  initialState: bookDetailsArray,
  reducers: {
    createNewBook: (state, action) => {
      return [...state, action.payload];
    },
    setIsBoughtToTrue: (state, action) => {
      return state.map((book) => {
        if (book.key === action.payload) {
          return { ...book, isBought: true };
        } else {
          return book;
        }
      });
    },
    setIsReviewedToTrue: (state, action) => {
      return state.map((book) => {
        console.log(book.key, action.payload);
        if (book.key === action.payload) {
          return { ...book, isReviewed: true };
        } else {
          return book;
        }
      });
    },
  },
});

export const { createNewBook, setIsBoughtToTrue, setIsReviewedToTrue } =
  bookDetailsSlice.actions;

export default bookDetailsSlice.reducer;
