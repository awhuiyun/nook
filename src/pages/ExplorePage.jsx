import React, { useEffect, useState } from "react";
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

  // Import book details from store & filter based on searchPhrase
  const bookDetailsDataset = useSelector((state) => state.bookDetails);
  const searchPhrase = useSelector((state) => state.search.searchPhrase);
  const [filteredBookDetailsDataset, setFilterredBookDetailsDataset] =
    useState(bookDetailsDataset);

  useEffect(() => {
    const filteredDataset = bookDetailsDataset.filter((item) => {
      return item.bookName.includes(searchPhrase);
    });
    setFilterredBookDetailsDataset(filteredDataset);
  }, [searchPhrase]);

  return (
    <div>
      <BookCardContainer bookDetailsDataset={filteredBookDetailsDataset} />
    </div>
  );
}
