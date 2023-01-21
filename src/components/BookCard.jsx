import React from "react";

export default function BookCard({ imgUrl, bookName, authorName }) {
  return (
    <div className="bg-zinc-100 w-[336px] h-[550px] flex flex-col justify-center rounded-md">
      <img src={imgUrl} className="h-[329px] w-[198px] self-center" />
      <p className="text-center w-[300px] h-[75px] self-center mt-8 font-bold">
        {bookName}
      </p>
      <p className="text-center w-[300px] self-center mt-2">{authorName}</p>
    </div>
  );
}
