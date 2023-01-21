import React from "react";
import BookCard from "./BookCard";
import bookDetailsArray from "../datasets/bookDetailsArray";

export default function BookCardContainer() {
  return (
    <div className="grid grid-cols-3 gap-x-0 gap-y-12 justify-items-center w-[1180px] mx-auto my-16">
      {bookDetailsArray.map((item) => {
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
