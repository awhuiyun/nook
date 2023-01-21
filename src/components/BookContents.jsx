import React, { useEffect, useState } from "react";
import axios from "axios";
import HeadingOne from "./HeadingOne";
import HeadingTwo from "./HeadingTwo";
import HeadingThree from "./HeadingThree";
import Paragraph from "./Paragraph";
import bookDetailsArray from "../datasets/bookDetailsArray";

export default function BookContents({ bookKey }) {
  // Book details
  const bookDetails = bookDetailsArray.filter((item) => {
    return item.key === bookKey;
  })[0];

  // Fetch dummy notion content
  const [bookData, setBookData] = useState([]);

  // GET request function to backend
  function getData() {
    axios
      .get("http://localhost:5000/notion-data", {
        params: {
          // id: bookDetails.notionPageId,
          id: "c47e8eba8c5e4e18ae760376a7a4a67e",
        },
      })
      .then((res) => setBookData(res.data));
  }

  // Get data on mount
  useEffect(() => {
    getData();
  }, []);

  console.log(bookData);

  return (
    <div className="text-zinc-700">
      {bookData.map((item, index) => {
        if (item.type === "heading_1") {
          return <HeadingOne key={index} content={item.content} />;
        } else if (item.type === "heading_2") {
          return <HeadingTwo key={index} content={item.content} />;
        } else if (item.type === "heading_3") {
          return <HeadingThree key={index} content={item.content} />;
        } else if (item.type === "paragraph") {
          return <Paragraph key={index} content={item.content} />;
        }
      })}
    </div>
  );
}
