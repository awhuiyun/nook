import { configureStore } from "@reduxjs/toolkit";
import bookDetailsReducer from "./bookDetails";
import bookReviewsReducer from "./bookReviews";
import searchReducer from "./search";

const store = configureStore({
  reducer: {
    bookDetails: bookDetailsReducer,
    bookReviews: bookReviewsReducer,
    search: searchReducer,
  },
});

export default store;
