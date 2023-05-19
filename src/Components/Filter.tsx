import React from "react";
import TuneIcon from "@mui/icons-material/Tune";

const Filter = () => {
  return (
    <div className=" bg-white w-1/5 shadow-xl rounded-lg mt-5">
      <div className="flex justify-between items-center px-5 py-3">
        <h1 className="text-xl font-medium">Filter</h1>
        <TuneIcon fontSize="small" />
      </div>

      <div className="border-y">
        <div className="px-5 my-3">
          <p>Brand</p>
          <div className="space-x-2 flex items-center">
            <input type="checkbox" id="numberA" name="numberA" />
            <label htmlFor="numberA">Number A</label>
          </div>

          <div className="space-x-2 flex items-center">
            <input type="checkbox" id="Brand2" name="Brand2" />
            <label htmlFor="Brand2">Brand 2</label>
          </div>
          <div className="space-x-2 flex items-center">
            <input type="checkbox" id="BrandC" name="BrandC" />
            <label htmlFor="BrandC">Brand C</label>
          </div>
          <div className="space-x-2 flex items-center">
            <input type="checkbox" id="BrandD" name="numberD" />
            <label htmlFor="BrandD">Brand D</label>
          </div>
        </div>
      </div>

      <div className="px-5 my-3">
        <p>Category</p>
        <div className="space-x-2 flex items-center">
          <input type="checkbox" id="numberA" name="numberA" />
          <label htmlFor="numberA">Number A</label>
        </div>

        <div className="space-x-2 flex items-center">
          <input type="checkbox" id="Brand2" name="Brand2" />
          <label htmlFor="Brand2">Brand 2</label>
        </div>
        <div className="space-x-2 flex items-center">
          <input type="checkbox" id="BrandC" name="BrandC" />
          <label htmlFor="BrandC">Brand C</label>
        </div>
        <div className="space-x-2 flex items-center">
          <input type="checkbox" id="BrandD" name="numberD" />
          <label htmlFor="BrandD">Brand D</label>
        </div>
      </div>

      <div className="border-y">
        <div className="px-5 my-3">
          <p>Price</p>
          <div className="space-x-2 flex items-center">
            <input type="checkbox" id="numberA" name="numberA" />
            <label htmlFor="numberA">Number A</label>
          </div>

          <div className="space-x-2 flex items-center">
            <input type="checkbox" id="Brand2" name="Brand2" />
            <label htmlFor="Brand2">Brand 2</label>
          </div>
          <div className="space-x-2 flex items-center">
            <input type="checkbox" id="BrandC" name="BrandC" />
            <label htmlFor="BrandC">Brand C</label>
          </div>
          <div className="space-x-2 flex items-center">
            <input type="checkbox" id="BrandD" name="numberD" />
            <label htmlFor="BrandD">Brand D</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
