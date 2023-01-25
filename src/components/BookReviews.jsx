import React, { useEffect, useState } from "react";
import BookReviewCard from "./BookReviewCard";

export default function BookReviews({
  isBought,
  isReviewed,
  bookReviews,
  setAddReviewSectionOpenTrue,
}) {
  const [numOfReviews, setNumOfReviews] = useState(0);

  // Update number of reviews
  useEffect(() => {
    setNumOfReviews(bookReviews.reviews.length);
  }, [bookReviews]);

  return (
    <div>
      {isBought ? (
        isReviewed ? (
          <div className="mt-32 mb-5"></div>
        ) : (
          <button
            className="bg-white text-emerald-500 py-2 px-4 mt-32 mb-5 mx-4 rounded border border-emerald-500 self-center"
            onClick={() => setAddReviewSectionOpenTrue()}
          >
            Add a review
          </button>
        )
      ) : (
        <div className="mt-32 mb-5"></div>
      )}
      <div className="flex flex-row mt-5 mb-32 overflow-x-auto">
        {numOfReviews === 0 ? (
          <div>
            <p className="mx-5 italic">No reviews yet.</p>
          </div>
        ) : (
          bookReviews.reviews.map((item) => {
            return <BookReviewCard key={item.key} {...item} />;
          })
        )}
      </div>
    </div>
  );
}
