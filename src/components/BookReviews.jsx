import React, { useEffect, useState } from "react";
import BookReviewCard from "./BookReviewCard";

export default function BookReviews({ bookReviews }) {
  const [numOfReviews, setNumOfReviews] = useState(0);

  // Update number of reviews
  useEffect(() => {
    setNumOfReviews(bookReviews.reviews.length);
  }, [bookReviews]);

  return (
    <div className="flex flex-row my-32  overflow-x-auto">
      {numOfReviews === 0 ? (
        <div className="border">
          <p className="italic">No reviews yet.</p>
        </div>
      ) : (
        bookReviews.reviews.map((item) => {
          return <BookReviewCard key={item.key} {...item} />;
        })
      )}
    </div>
  );
}
