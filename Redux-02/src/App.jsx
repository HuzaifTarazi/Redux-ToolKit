import React from "react";
import SearchBox from "./components/searchBox.jsx";
import Tabs from "./components/Tabs.jsx";
import ActiveTabResults from "./components/ActiveTabResults.jsx";

const App = () => {
  return (
    <>
      <div className="bg-cyan-900 p-2 shadow-lg">
        <SearchBox />
      </div>

      <div className="text-white h-screen bg-gray-900">
        <Tabs />
        <div className="bg-gray-300 mt-3 p-3 m-10 rounded text-black">
          <ActiveTabResults />
        </div>
      </div>

    </>
  );
};

export default App;
