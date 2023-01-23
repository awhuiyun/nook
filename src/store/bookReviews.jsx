import { createSlice } from "@reduxjs/toolkit";
import bookReviewsArray from "../datasets/bookReviewsArray";

const bookReviewsSlice = createSlice({
  name: "bookReviews",
  initialState: bookReviewsArray,
  reducers: {
    createNewReview: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const { createNewReview } = bookReviewsSlice.actions;

export default bookReviewsSlice.reducer;
