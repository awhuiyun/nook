import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export default function BookDescription({
  isBought,
  bookName,
  bookPrice,
  bookDescription,
  bookCoverImgLink,
  authorName,
}) {
  return (
    <div className="flex flex-row">
      <img src={bookCoverImgLink} className="h-[329px] w-[198px] m-5" />
      <div className="m-5  text-zinc-700">
        <div className="flex flex-row text-4xl font-bold mb-4">
          <p className="mr-4 w-[700px]">{bookName}</p>
          {isBought ? (
            <div className="grow text-end">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="text-emerald-500 text-6xl"
              />
              <p className="text-emerald-500 text-base">Bought</p>
            </div>
          ) : (
            <p className="grow text-end">${bookPrice}</p>
          )}
        </div>
        <p className="text-xl font-medium ">{authorName}</p>
        <p className="text-base mt-10 font-normal">{bookDescription}</p>
      </div>
    </div>
  );
}
