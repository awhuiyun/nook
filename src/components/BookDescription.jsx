import React from "react";
import bookDetailsArray from "../datasets/bookDetailsArray";

export default function BookDescription({ bookKey }) {
  const bookDetails = bookDetailsArray.filter((item) => {
    return item.key === bookKey;
  })[0];

  return (
    <div className="flex flex-row">
      <img
        src={bookDetails.bookCoverImgLink}
        className="h-[329px] w-[198px] m-5"
      />
      <div className="m-5  text-zinc-700">
        <div className="flex flex-row text-4xl font-bold mb-4">
          <p className="mr-4 w-[700px]">{bookDetails.bookName}</p>
          <p className="grow text-end">{bookDetails.bookPrice}</p>
        </div>
        <p className="text-xl font-medium ">{bookDetails.authorName}</p>
        <p className="text-base mt-10 font-normal">
          {bookDetails.bookDescription}
        </p>
      </div>
    </div>
  );
}
