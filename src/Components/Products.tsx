import React, { useState } from "react";
import productsdata from "./products.json";

interface Product {
  id: number;
  name: string;
  price: number;
}

const Products = () => {
//   const PriceSorter = () => {
//     const [sortedProducts, setSortedProducts] = useState<Product[]>([]);

//     const handleSort = () => {
//       const sorted = [...sortedProducts].sort((a, b) => a.price - b.price);
//       setSortedProducts(sorted);
//       };
      
      
//   };
    
const PriceSorter: React.FC = () => {
    const [sortedProducts, setSortedProducts] = useState<Product[]>([]);
  
   
  
    const handleSort = (): void => {
      const sorted = [...sortedProducts].sort((a, b) => a.price - b.price);
      setSortedProducts(sorted);
    };
  
  return (
    <div className="mt-5">
      <div className="flex justify-between">
        <h1>Home / Home decoration / Artificial</h1>

        <div>
          <label htmlFor="sort">Sort by:</label>

          <select name="cars" id="cars">
            <option onClick={PriceSorter}>high to low</option>
            <option value="saab">low to high</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-3">
        {productsdata.products.map((product, index: number) => (
          <div key={index} className="mb-10 mr-10">
            <img className="w-[280px] h-72" src={product.image} alt="Product" />
            <div className="bg-white ">
              <h3>Price: ${product.price}</h3>
              <h4>Rating: {product.rating}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
