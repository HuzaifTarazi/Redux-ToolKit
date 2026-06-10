import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { setLoading, setQuery } from "../features/searchSlice/searchSlice";
const SearchBox = () => {
  const [searchBox, setsearchBox] = useState("");
  const dispatch = useDispatch()
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(setQuery(searchBox))
          dispatch(setLoading(true))
        }}
        className="flex flex-row  items-center justify-center"
      >
        <input
          onChange={(e) => {
            setsearchBox(e.target.value);
          }}
          required={true}
          type="text"
          value={searchBox}
          placeholder="Search Anything..."
          className="m-3 mt-5 ms-10 w-1/2 p-2 border-2 text-white rounded focus:outline-none focus:border-red-400 focus:border-2"
        />
        <button className="bg-red-600 mt-2 p-2.5 px-5 cursor-pointer text-white rounded active:bg-red-700">
          Search Now
        </button>
      </form>
    </>
  );
};

export default SearchBox;
