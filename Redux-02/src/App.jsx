import React from "react";
import { giphyApi, pexelsApi } from "./Api/mediaApi.js";
import { unsplashApi } from "./Api/mediaApi.js";
import { useSelector } from "react-redux";
import SearchBox from "./components/searchBox.jsx";

const App = () => {
  const searchData = useSelector((state) => state.search.value);
  return (
    <>
      <div className="bg-cyan-900 p-2 shadow-lg">
        <SearchBox />
      </div>
      <div className="text-white h-screen bg-gray-900"></div>
    </>
  );
};

export default App;
