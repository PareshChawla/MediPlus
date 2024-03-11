import React, { useState } from "react";

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState("Default sorting");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="relative">
      <select
        value={selectedOption}
        onChange={handleSelectChange}
        className=" bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline absolute right-0 ">
        <option value="Default sorting">Default sorting</option>
        <option value="Sort by popularity">Sort by popularity</option>
        <option value="Sort by average rating">Sort by average rating</option>
        <option value="Sort by latest">Sort by latest</option>
        <option value="Sort by price: low to high">
          Sort by price: low to high
        </option>
        <option value="Sort by price: high to low">
          Sort by price: high to low
        </option>
      </select>
      
    </div>
  );
};

export default Dropdown;