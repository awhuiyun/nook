import React, { useEffect } from "react";
import BookCardContainer from "../components/BookCardContainer";

export default function ExplorePage({ setIsSearchbarNeededTrue }) {
  // Toggle isSearchbarNeeded to "true"
  useEffect(() => {
    setIsSearchbarNeededTrue();
  }, []);

  return (
    <div>
      <BookCardContainer />
    </div>
  );
}
