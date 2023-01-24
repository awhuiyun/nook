import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BookDescription from "../components/BookDescription";
import BookReviews from "../components/BookReviews";
import BookContents from "../components/BookContents";
import Footer from "../components/Footer";

export default function BookDetailsPage({
  setIsNavbarNeededTrue,
  setIsSearchbarNeededFalse,
}) {
  // Toggle isNavbarNeeded and isSearchbarNeeded
  useEffect(() => {
    setIsNavbarNeededTrue();
    setIsSearchbarNeededFalse();
  }, []);

  // Import book details from store
  const bookDetailsDataset = useSelector((state) => state.bookDetails);
  const bookReviewsDataset = useSelector((state) => state.bookReviews);

  // Book details and reviews for specific book
  const params = useParams();
  const bookDetails = bookDetailsDataset.filter((item) => {
    return item.key === params.item;
  })[0];
  const bookReviews = bookReviewsDataset.filter((item) => {
    return item.bookKey === params.item;
  })[0];

  return (
    <div className="h-screen mt-16 ">
      <div>
        <div className="w-[1180px] mx-auto">
          <BookDescription
            bookName={bookDetails.bookName}
            bookPrice={bookDetails.bookPrice}
            bookDescription={bookDetails.bookDescription}
            bookCoverImgLink={bookDetails.bookCoverImgLink}
            authorName={bookDetails.authorName}
          />
          <BookReviews bookReviews={bookReviews} />
        </div>
        <BookContents
          isBought={bookDetails.isBought}
          percentToObfuscate={bookDetails.percentObfuscated}
          notionPageId={bookDetails.notionPageId}
        />
      </div>
      <Footer bookKey={params.item} bookPrice={bookDetails.bookPrice} />
    </div>
  );
}
