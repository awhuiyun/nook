import React from "react";
import { useParams } from "react-router-dom";
import BookDescription from "../components/BookDescription";
import BookReviews from "../components/BookReviews";
import BookContents from "../components/BookContents";

export default function BookDetailsPage() {
  const params = useParams();

  return (
    <div className="mx-auto my-16 w-[1180px]">
      <BookDescription bookKey={params.item} />
      <BookReviews bookKey={params.item} />
      <BookContents bookKey={params.item} />
    </div>
  );
}
