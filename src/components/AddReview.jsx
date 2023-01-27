import React, { useState } from "react";
import uuid from "react-uuid";
import { useDispatch } from "react-redux";
import { addNewReview } from "../store/bookReviews";
import { setIsReviewedToTrue } from "../store/bookDetails";
import BaseInput from "./BaseInput";
import BaseTextArea from "./BaseTextArea";

export default function AddReview({ bookKey, setAddReviewSectionOpenFalse }) {
  const dispatch = useDispatch();
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");
  const [name, setName] = useState("");

  function handleChange(inputId, inputVal) {
    if (inputId === "reviewInput") {
      setReview(inputVal);
    } else if (inputId === "ratingInput") {
      setRating(inputVal);
    } else if (inputId === "reviwerName") {
      setName(inputVal);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Create new review object
    const uniqueKey = uuid();
    const newReview = {
      key: uniqueKey,
      nameOfReviewer: name,
      rating: rating,
      review: review,
    };

    // Add new review into bookReviews store
    dispatch(addNewReview({ key: bookKey, newReview: newReview }));
    dispatch(setIsReviewedToTrue(bookKey));

    // Close modal
    setAddReviewSectionOpenFalse();
  }

  function handleCancelClick() {
    setAddReviewSectionOpenFalse();
  }

  return (
    <div
      className="fixed inset-0 backdrop-blur-sm bg-slate-700/20 fade-in z-50"
      onClick={handleCancelClick}
    >
      <form
        className="flex flex-col rounded-md w-1/3 max-w-xl sticky top-28 mx-auto bg-white p-5"
        onSubmit={handleSubmit}
        onClick={(e) => e.stopPropagation()}
      >
        <BaseTextArea
          label="Review:"
          type="text"
          id="reviewInput"
          handleChange={handleChange}
          required={true}
        />
        <BaseInput
          label="Rating out of 5:"
          type="number"
          id="ratingInput"
          min="0"
          max="5"
          handleChange={handleChange}
          required={true}
          className="w-[70px]"
        />
        <BaseInput
          label="Name:"
          type="text"
          id="reviwerName"
          handleChange={handleChange}
          required={true}
        />
        <button
          className="bg-zinc-700 text-[white] py-2 px-4 my-10 rounded-md self-center"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
