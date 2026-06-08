import React from "react";
import { giphyApi, pexelsApi } from "./Api/mediaApi.js";
import { unsplashApi } from "./Api/mediaApi.js";
import SearchBox from "./components/searchBox.jsx";

const App = () => {
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
