import React from "react";
import BookCard from "./BookCard";

export default function BookCardContainer({ bookDetailsDataset }) {
  return (
    <div className="grid grid-cols-3 gap-x-0 gap-y-12 justify-items-center w-[1180px] mx-auto my-16">
      {bookDetailsDataset.map((item) => {
        return (
          <BookCard
            key={item.notionPageId}
            imgUrl={item.bookCoverImgLink}
            authorName={item.authorName}
            bookName={item.bookName}
            bookKey={item.key}
          />
        );
      })}
    </div>
  );
}
