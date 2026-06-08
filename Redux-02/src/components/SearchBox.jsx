import React, { useState } from "react";

const SearchBox = () => {
  const [searchBox, setsearchBox] = useState("");
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
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
        <button className="bg-red-600 mt-2 p-2.5 px-5 text-white rounded active:bg-red-700">
          Search Now
        </button>
      </form>
    </>
  );
};

export default SearchBox;
