import { createSlice } from "@reduxjs/toolkit";
import bookReviewsArray from "../datasets/bookReviewsArray";

const bookReviewsSlice = createSlice({
  name: "bookReviews",
  initialState: bookReviewsArray,
  reducers: {
    createReviewSectionForNewBook: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const { createReviewSectionForNewBook } = bookReviewsSlice.actions;

export default bookReviewsSlice.reducer;
