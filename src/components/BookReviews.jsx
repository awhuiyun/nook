import React from "react";
import BookReviewCard from "./BookReviewCard";
import bookReviewsArray from "../datasets/bookReviewsArray";

export default function BookReviews({ bookKey }) {
  const bookReview = bookReviewsArray.filter((item) => {
    return item.bookKey === bookKey;
  });

  return (
    <div className="flex flex-row my-32  overflow-x-auto">
      {bookReview[0].reviews.map((item) => {
        return <BookReviewCard key={item.key} {...item} />;
      })}
    </div>
  );
}
