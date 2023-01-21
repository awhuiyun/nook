import React from "react";
import { useParams } from "react-router-dom";
import BookDescription from "../components/BookDescription";
import BookReviews from "../components/BookReviews";
import BookContents from "../components/BookContents";
import Footer from "../components/Footer";

export default function BookDetailsPage() {
  const params = useParams();

  return (
    <div className="h-screen mt-16 ">
      <div>
        <div className="w-[1180px] mx-auto">
          <BookDescription bookKey={params.item} />
          <BookReviews bookKey={params.item} />
        </div>
        <BookContents bookKey={params.item} />
      </div>
      <Footer bookKey={params.item} />
    </div>
  );
}
