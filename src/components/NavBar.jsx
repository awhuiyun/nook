import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { searchOnSubmit } from "../store/search";

export default function NavBar({ isSearchbarNeeded }) {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");

  function handleChange(e) {
    setSearchInput(e.target.value);
    dispatch(searchOnSubmit(e.target.value));
  }

  return (
    <div className="flex flex-row h-[80px] content-center backdrop-blur-sm sticky top-0 bg-white/50">
      <Link to="/" className="text-zinc-700 mx-14 my-5 text-3xl self-center ">
        Nook
      </Link>
      {isSearchbarNeeded && (
        <form className="border rounded border-zinc-700 w-72 py-2 m-5 self-center">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="text-zinc-300 px-2"
          />
          <input
            className="focus:outline-none placeholder:text-zinc-300 self-center bg-transparent"
            type="text"
            placeholder="Search..."
            value={searchInput}
            onChange={handleChange}
          />
        </form>
      )}

      <div className="flex flex-row grow justify-end">
        <Link to="/" className="text-zinc-500py-2 px-4 m-5 rounded self-center">
          Explore
        </Link>
        <Link
          to="/publish-form"
          className="bg-zinc-700 text-white py-2 px-4 ml-5 mr-14 my-5 rounded self-center"
        >
          Publish
        </Link>
      </div>
    </div>
  );
}
