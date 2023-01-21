import React from "react";

export default function HeadingOne({ content }) {
  return (
    <div className="h-[240px] bg-zinc-200 font-bold text-5xl text-center pt-[96px] my-24">
      {content}
    </div>
  );
}
