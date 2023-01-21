import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

export default function BookReviewCard({ nameOfReviewer, rating, review }) {
  return (
    <div className=" h-fit bg-zinc-50 text-zinc-700 rounded-md mx-4 w-[332px] ">
      <p className="w-[300px] italic mx-4 mt-6 mb-2 p-1">{review}</p>
      <p className="w-[300px] font-bold italic mx-4 my-6 p-1">{rating} / 5</p>
      <div className="w-[300px] flex flex-row mx-4 mt-2 mb-10">
        <FontAwesomeIcon
          icon={faCircle}
          className="text-zinc-200 w-[36px] h-[36px] p-2"
        />
        <div>
          <p className="font-bold pl-2">{nameOfReviewer}</p>
          <p className="font-medium text-zinc-400 italic pl-2">
            Verified reader
          </p>
        </div>
      </div>
    </div>
  );
}
