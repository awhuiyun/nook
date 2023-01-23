import { createSlice } from "@reduxjs/toolkit";
import bookDetailsArray from "../datasets/bookDetailsArray";

const bookDetailsSlice = createSlice({
  name: "bookDetails",
  initialState: bookDetailsArray,
  reducers: {
    createNewBook: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const { createNewBook } = bookDetailsSlice.actions;

export default bookDetailsSlice.reducer;
