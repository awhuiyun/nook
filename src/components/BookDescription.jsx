import React from "react";
import booksArray from "../../booksArray";

export default function BookDescription({ bookKey }) {
  const bookDetails = booksArray.filter((item) => {
    return item.key === bookKey;
  });

  return (
    <div className="flex flex-row">
      <img
        src={bookDetails[0].bookCoverImgLink}
        className="h-[329px] w-[198px] m-5"
      />
      <div className="m-5  text-zinc-700">
        <div className="flex flex-row text-4xl font-bold mb-4">
          <p className="mr-4 w-[700px]">{bookDetails[0].bookName}</p>
          <p className="grow text-end">{bookDetails[0].bookPrice}</p>
        </div>
        <p className="text-xl font-medium ">{bookDetails[0].authorName}</p>
        <p className="text-base mt-10 font-normal">
          {bookDetails[0].bookDescription}
        </p>
      </div>
    </div>
  );
}