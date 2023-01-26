import React from "react";

export default function ImageItem({ url }) {
  return (
    <div className="px-2 w-[1180px] mx-auto my-5">
      <img src={url} className="h-[329px]" />
    </div>
  );
}
