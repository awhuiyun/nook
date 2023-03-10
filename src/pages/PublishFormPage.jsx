import React, { useState, useEffect } from "react";
import uuid from "react-uuid";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createNewBook } from "../store/bookDetails";
import { createReviewSectionForNewBook } from "../store/bookReviews";
import BaseInput from "../components/BaseInput";
import BaseTextArea from "../components/BaseTextArea";

export default function PublishFormPage({
  setIsNavbarNeededTrue,
  setIsSearchbarNeededFalse,
}) {
  // Toggle isNavbarNeeded and isSearchbarNeeded
  useEffect(() => {
    setIsNavbarNeededTrue();
    setIsSearchbarNeededFalse();
  }, []);

  const dispatch = useDispatch();
  const [notionPageId, setNotionPageId] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [bookName, setBookName] = useState("");
  const [bookCoverImgLink, setBookCoverImgLink] = useState("");
  const [bookDescription, setBookDescription] = useState("");
  const [bookPrice, setBookPrice] = useState("");
  const [percentToObfuscate, setPercentToObfuscate] = useState("");
  const [uniqueKey, setUniqueKey] = useState("");
  const [isPublished, setIsPublished] = useState(false);

  function handleChange(inputId, inputVal) {
    if (inputId === "notionPageId") {
      setNotionPageId(inputVal);
    } else if (inputId === "authorName") {
      setAuthorName(inputVal);
    } else if (inputId === "bookName") {
      setBookName(inputVal);
    } else if (inputId === "bookCoverImgLink") {
      setBookCoverImgLink(inputVal);
    } else if (inputId === "bookDescription") {
      setBookDescription(inputVal);
    } else if (inputId === "bookPrice") {
      setBookPrice(inputVal);
    }
  }

  function handleChangeForRadioInput(e) {
    setPercentToObfuscate(e.target.value);
  }

  function handleClick() {
    // Clear states
    setNotionPageId("");
    setAuthorName("");
    setBookName("");
    setBookCoverImgLink("");
    setBookDescription("");
    setBookPrice("");
    setPercentToObfuscate("");
    setUniqueKey("");
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Create unique key for new book
    const concatBookName = bookName.replace(/\s+/g, "-").toLowerCase();
    const id = uuid();
    const uniqueKey = concatBookName + "-" + id;
    setUniqueKey(uniqueKey);

    // Add new book to bookDetails store
    const newBook = {
      key: uniqueKey,
      notionPageId: notionPageId,
      authorName: authorName,
      bookName: bookName,
      bookCoverImgLink: bookCoverImgLink,
      bookDescription: bookDescription,
      bookPrice: bookPrice,
      percentObfuscated: percentToObfuscate,
      isBought: false,
      isReviewed: false,
    };
    dispatch(createNewBook(newBook));

    // Add new book to bookReviews store
    const newReviewSectionForNewBook = {
      bookKey: uniqueKey,
      reviews: [],
    };
    dispatch(createReviewSectionForNewBook(newReviewSectionForNewBook));

    // Toggle to confirmation msg
    setIsPublished(true);
  }

  return (
    <div>
      {isPublished ? (
        <div className="items-center mx-auto w-[1180px] mt-[100px]">
          <div className="flex flex-col">
            <p className="text-5xl my-10 text-center">&#129395; Published!</p>
            <div className="flex flex-row border-2 border-zinc-300 w-[700px] self-center">
              <img src={bookCoverImgLink} className="h-[280px] m-5" />
              <div>
                <p className="mx-5 mt-10 mb-5 text-zinc-700 text-xl font-bold">
                  {bookName}
                </p>
                <p className="mx-5 text-zinc-700">{authorName}</p>
              </div>
            </div>
            <Link
              to={`/${uniqueKey}`}
              onClick={handleClick}
              className="self-center my-10"
            >
              <button className="bg-zinc-700 text-white w-[150px] h-[40px] rounded-md">
                Bring me there!
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <form
          className="flex flex-col w-[1180px] mx-auto my-16"
          onSubmit={handleSubmit}
        >
          <p className="font-bold text-3xl mb-5">Publish your book</p>
          <BaseInput
            label="Notion page ID"
            type="text"
            id="notionPageId"
            value={notionPageId}
            handleChange={handleChange}
            required={true}
          />
          <BaseInput
            label="Author"
            type="text"
            id="authorName"
            value={authorName}
            handleChange={handleChange}
            required={true}
          />
          <BaseInput
            label="Book title"
            type="text"
            id="bookName"
            value={bookName}
            handleChange={handleChange}
            required={true}
          />
          <BaseInput
            label="Book cover image link"
            type="text"
            id="bookCoverImgLink"
            value={bookCoverImgLink}
            handleChange={handleChange}
            required={true}
          />
          <BaseTextArea
            label="Book description"
            id="bookDescription"
            value={bookDescription}
            handleChange={handleChange}
            required={true}
          />
          <BaseInput
            label="Price"
            type="number"
            id="bookPrice"
            value={bookPrice}
            handleChange={handleChange}
            required={true}
          />
          <div className="my-2 p-2">
            <p className="mb-5">
              Percentage of book obfuscated before purchase:
            </p>
            {/* 10% */}
            <div className="flex flex-row">
              <div className="mx-1">
                <input
                  type="radio"
                  name="percentToObfuscate"
                  id="0.1"
                  value="10%"
                  className="hidden peer"
                  onChange={handleChangeForRadioInput}
                />
                <label
                  htmlFor="0.1"
                  className="border rounded px-4 py-2 cursor-pointer peer-checked:border-zinc-700 peer-checked:bg-zinc-50"
                >
                  10%
                </label>
              </div>
              {/* 25% */}
              <div className="mx-1">
                <input
                  type="radio"
                  name="percentToObfuscate"
                  id="0.25"
                  value="25%"
                  className="hidden peer"
                  onChange={handleChangeForRadioInput}
                />
                <label
                  htmlFor="0.25"
                  className="border rounded px-4 py-2 cursor-pointer peer-checked:border-zinc-700 peer-checked:bg-zinc-50"
                >
                  25%
                </label>
              </div>
              {/* 50% */}
              <div className="mx-1">
                <input
                  type="radio"
                  name="percentToObfuscate"
                  id="0.5"
                  value="50%"
                  className="hidden peer"
                  onChange={handleChangeForRadioInput}
                />
                <label
                  htmlFor="0.5"
                  className="border rounded px-4 py-2 cursor-pointer peer-checked:border-zinc-700 peer-checked:bg-zinc-50"
                >
                  50%
                </label>
              </div>
              {/* 75% */}
              <div className="mx-1">
                <input
                  type="radio"
                  name="percentToObfuscate"
                  id="0.75"
                  value="75%"
                  className="hidden peer"
                  onChange={handleChangeForRadioInput}
                />
                <label
                  htmlFor="0.75"
                  className="border rounded px-4 py-2 cursor-pointer peer-checked:border-zinc-700 peer-checked:bg-zinc-50"
                >
                  75%
                </label>
              </div>
              {/* 90% */}
              <div className="mx-1">
                <input
                  type="radio"
                  name="percentToObfuscate"
                  id="0.9"
                  value="90%"
                  className="hidden peer"
                  onChange={handleChangeForRadioInput}
                />
                <label
                  htmlFor="0.9"
                  className="border rounded px-4 py-2 cursor-pointer peer-checked:border-zinc-700 peer-checked:bg-zinc-50"
                >
                  90%
                </label>
              </div>
            </div>
          </div>
          <button
            className="bg-zinc-700 text-[white] py-2 px-4 my-10 rounded-md self-center"
            type="submit"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
