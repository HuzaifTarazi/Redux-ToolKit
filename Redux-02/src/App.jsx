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
      
      <div className="min-h-screen text-white  bg-gray-900 flex flex-col">
        <Tabs />
        <ActiveTabResults />
      </div>

    </>
  );
};

export default App;
