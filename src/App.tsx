import React from "react";
import Navbar from "./Pages/Navbar";
import Filter from "./Components/Filter";
import Products from "./Components/Products";

const App = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-9/12">
          <Navbar />
        </div>
      </div>

      <div className="flex justify-center bg-[#F6F1E9] h-full">
        <div className="w-9/12 flex items-start space-x-5">
          <Filter />
          <Products />
        </div>
      </div>
    </>
  );
};

export default App;
