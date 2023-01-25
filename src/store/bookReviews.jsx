import { createSlice } from "@reduxjs/toolkit";
import bookReviewsArray from "../datasets/bookReviewsArray";

const bookReviewsSlice = createSlice({
  name: "bookReviews",
  initialState: bookReviewsArray,
  reducers: {
    createReviewSectionForNewBook: (state, action) => {
      return [...state, action.payload];
    },
    addNewReview: (state, action) => {
      return state.map((book) => {
        if (book.bookKey === action.payload.key) {
          return {
            bookKey: book.bookKey,
            reviews: [...book.reviews, action.payload.newReview],
          };
        } else {
          return book;
        }
      });
    },
  },
});

export const { createReviewSectionForNewBook, addNewReview } =
  bookReviewsSlice.actions;

export default bookReviewsSlice.reducer;
