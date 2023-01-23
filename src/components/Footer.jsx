import React from "react";

export default function Footer({ bookPrice }) {
  return (
    <div className="h-[80px] bg-zinc-700 sticky bottom-0 flex flex-row justify-center mt-16">
      <p className="text-white text-2xl pt-[24px]">
        Unlock the book and support the author for ${bookPrice} &#128073;
      </p>
      <button className="bg-red-400 text-white py-2 px-4 mx-5 my-5 rounded self-center">
        Checkout
      </button>
    </div>
  );
}
