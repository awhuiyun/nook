import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import BookCardContainer from "../components/BookCardContainer";

export default function ExplorePage({
  setIsSearchbarNeededTrue,
  setIsNavbarNeededTrue,
}) {
  // Toggle isNavbarNeeded and isSearchbarNeeded
  useEffect(() => {
    setIsNavbarNeededTrue();
    setIsSearchbarNeededTrue();
  }, []);

  // Import book details from store
  const bookDetailsDataset = useSelector((state) => state.bookDetails);

  return (
    <div>
      <BookCardContainer bookDetailsDataset={bookDetailsDataset} />
    </div>
  );
}
