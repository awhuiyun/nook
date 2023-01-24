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
  },
});

export const { createNewBook, setIsBoughtToTrue } = bookDetailsSlice.actions;

export default bookDetailsSlice.reducer;
