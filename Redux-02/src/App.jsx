import React from "react";
import { giphyApi, pexelsApi } from "./Api/mediaApi.js";
import { unsplashApi } from "./Api/mediaApi.js";
const App = () => {
  return (
    <>
      <div className="text-white h-screen bg-gray-900">
        <button
          className="bg-red-500 m-5 p-3 hover:bg-red-600 active:bg-red-700"
          onClick={() => {
            unsplashApi("cat");
          }}
        >
          GET PHOTOS
        </button>
        <button
          className="bg-red-500 m-5 p-3 hover:bg-red-600 active:bg-red-700"
          onClick={() => {
            pexelsApi("cat");
          }}
        >
          GET VIDEOS
        </button>

          <button
          className="bg-red-500 m-5 p-3 hover:bg-red-600 active:bg-red-700"
          onClick={() => {
            giphyApi('cheeseburger')
          }}
        >
          GET GIPHY
        </button>
      </div>
    </>
  );
};

export default App;
