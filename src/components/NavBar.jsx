import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  return (
    <div className="flex flex-row h-[80px] content-center backdrop-blur-sm sticky top-0">
      <p className="text-zinc-700 mx-14 my-5 text-3xl self-center ">Nook</p>
      <div className="border rounded border-zinc-700 w-72 py-2 m-5 self-center">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="text-zinc-300 px-2"
        />
        <input
          className="focus:outline-none placeholder:text-zinc-300 self-center"
          type="text"
          placeholder="Search"
        />
      </div>
      <div className="flex flex-row grow justify-end">
        <p className="text-zinc-500py-2 px-4 m-5 rounded self-center">
          Explore
        </p>
        <p className="bg-zinc-700 text-[white] py-2 px-4 ml-5 mr-14 my-5 rounded self-center">
          Publish
        </p>
      </div>
    </div>
  );
}
