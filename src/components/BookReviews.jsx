import React from "react";
import BookReviewCard from "./BookReviewCard";

export default function BookReviews({ bookReviews }) {
  return (
    <div className="flex flex-row my-32  overflow-x-auto">
      {bookReviews.reviews.map((item) => {
        return <BookReviewCard key={item.key} {...item} />;
      })}
    </div>
  );
}
