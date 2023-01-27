import React from "react";
import HeadingOne from "./HeadingOne";
import HeadingTwo from "./HeadingTwo";
import HeadingThree from "./HeadingThree";
import Paragraph from "./Paragraph";
import BulletedItem from "./BulletedItem";
import ImageItem from "./ImageItem";

export default function NotionContentRenderer({ data }) {
  return (
    <div>
      {data.map((item, index) => {
        if (item.type === "heading_1") {
          return <HeadingOne key={index} content={item.content} />;
        }
        if (item.type === "heading_2") {
          return <HeadingTwo key={index} content={item.content} />;
        }
        if (item.type === "heading_3") {
          return <HeadingThree key={index} content={item.content} />;
        }
        if (item.type === "paragraph") {
          return <Paragraph key={index} content={item.content} />;
        }
        if (item.type === "line_break") {
          return <br key={index} />;
        }
        if (
          item.type === "bulleted_list_item" ||
          item.type === "numbered_list_item"
        ) {
          return <BulletedItem key={index} content={item.content} />;
        }
        if (item.type === "image") {
          return <ImageItem key={index} url={item.content} />;
        }
      })}
    </div>
  );
}
