import React from "react";
import dummyBookContent from "../datasets/dummyBookContent";
import HeadingOne from "./HeadingOne";
import HeadingTwo from "./HeadingTwo";
import HeadingThree from "./HeadingThree";
import Paragraph from "./Paragraph";

export default function BookContents({ bookKey }) {
  const bookContent = dummyBookContent.filter((item) => {
    return item.bookKey === bookKey;
  })[0].bookContent;

  // console.log(bookContent);

  return (
    <div className="text-zinc-700">
      {bookContent.map((item, index) => {
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
