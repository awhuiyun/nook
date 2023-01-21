import React from "react";
import { useParams } from "react-router-dom";
import BookDescription from "../components/BookDescription";
import BookReviews from "../components/BookReviews";
import BookContents from "../components/BookContents";

export default function BookDetailsPage() {
  const params = useParams();

  return (
    <div className="my-16 ">
      <div className="w-[1180px] mx-auto">
        <BookDescription bookKey={params.item} />
        <BookReviews bookKey={params.item} />
      </div>
      <BookContents bookKey={params.item} />
    </div>
  );
}
