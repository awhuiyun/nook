import { configureStore } from "@reduxjs/toolkit";
import bookDetailsReducer from "./bookDetails";
import bookReviewsReducer from "./bookReviews";

const store = configureStore({
  reducer: { bookDetails: bookDetailsReducer, bookReviews: bookReviewsReducer },
});

export default store;
