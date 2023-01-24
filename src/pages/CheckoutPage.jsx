import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function CheckoutPage({ setIsNavbarNeededFalse }) {
  // Toggle isNavbarNeeded
  useEffect(() => {
    setIsNavbarNeededFalse();
  }, []);

  // Import book details for specific book
  const params = useParams();
  const bookDetailsDataset = useSelector((state) => state.bookDetails);
  const bookDetails = bookDetailsDataset.filter((item) => {
    return item.key === params.item;
  })[0];

  return (
    <div className="flex flex-row">
      <div className="w-1/2 bg-zinc-700 h-screen grid items-center justify-items-end">
        <div className="w-[500px] h-[900px] mr-[100px]">
          <Link
            to={`/${params.item}`}
            className="flex flex-row text-zinc-500 hover:text-white mt-5"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="self-center p-2" />
            <p className="py-2">Back</p>
          </Link>
          <p className="text-2xl mt-[100px] text-white ml-8 mb-2 text-start">
            You're purchasing:
          </p>
          <div className="flex flex-row ml-3">
            <img src={bookDetails.bookCoverImgLink} className="h-[165px] m-5" />
            <div>
              <p className="m-5 text-white">{bookDetails.bookName}</p>
              <p className="mx-5 text-white">{bookDetails.authorName}</p>
            </div>
          </div>
          <hr className="mx-5  px-2 border-zinc-300"></hr>
          <p className="text-2xl text-white m-5 text-end">
            SGD {bookDetails.bookPrice}
          </p>
        </div>
      </div>
      <div className="w-1/2 h-screen grid items-center justify-items-start text-zinc-700">
        <form className="w-[500px] h-[900px] ml-[100px] ">
          {/* Contact Information */}
          <div>
            <p className="m-5 text-lg">Contact information</p>
            <div className="flex flex-row h-[45px] mx-5 rounded-md border bg-zinc-100 drop-shadow-md">
              <p className="text-sm m-3 place-self-center">Email</p>
              <input
                type="text"
                id="email"
                required
                className="text-sm p-3 bg-transparent focus:outline-none grow ml-10 "
              />
            </div>
          </div>
          {/* Payment by card */}
          <p className="mx-5 mt-10 mb-5 text-lg">Payment by Card</p>
          <p className="mx-5 my-2 text-sm">Card information</p>
          <input
            type="text"
            id="card number"
            placeholder="1234 1234 1234 1234"
            required
            className="text-sm bg-white mx-5 p-3 focus:outline-none rounded-t-md border border-zinc-200 w-[458px] drop-shadow"
          />
          <div className="flex flex-row">
            <input
              type="text"
              id="card expiry date"
              placeholder="MM / YY"
              className="text-sm bg-white ml-5 p-3 focus:outline-none rounded-bl-md border-b border-r border-l border-zinc-200 w-[229px] drop-shadow-sm"
            />
            <input
              type="text"
              id="card cvc"
              placeholder="CVC"
              className="text-sm bg-white mr-5 p-3 focus:outline-none rounded-br-md border-b border-r border-zinc-200 w-[229px] drop-shadow-sm"
            />
          </div>
          <p className="mx-5 mt-5 mb-2 text-sm">Name on card</p>
          <input
            type="text"
            id="name"
            required
            className="text-sm bg-white mx-5 p-3 focus:outline-none rounded-md border border-zinc-200 w-[458px] drop-shadow-sm"
          />
          <p className="mx-5 mt-5 mb-2 text-sm">Country or region</p>
          <input
            type="text"
            id="name"
            required
            className="text-sm bg-white mx-5 p-3 focus:outline-none rounded-md border border-zinc-200 w-[458px] drop-shadow-sm"
          />
          <button
            type="submit"
            className="mx-5 mt-20 bg-red-500 text-white w-[458px] h-[45px] rounded-md"
          >
            Pay
          </button>
        </form>
      </div>
    </div>
  );
}
