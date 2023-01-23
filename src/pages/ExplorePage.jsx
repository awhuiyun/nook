import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import BookCardContainer from "../components/BookCardContainer";

export default function ExplorePage({ setIsSearchbarNeededTrue }) {
  // Import book details from store
  const bookDetailsDataset = useSelector((state) => state.bookDetails);

  // Toggle isSearchbarNeeded to "true"
  useEffect(() => {
    setIsSearchbarNeededTrue();
  }, []);

  return (
    <div>
      <BookCardContainer bookDetailsDataset={bookDetailsDataset} />
    </div>
  );
}
