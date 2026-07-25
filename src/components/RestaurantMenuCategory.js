import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantMenuCategory = ({ data, showItems, settingShowIndex }) => {
  const handleClick = () => {
    settingShowIndex();
  };
  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
      {/* Accordion Header */}
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span>⏷</span>
      </div>
      {/* Accordion Body */}
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantMenuCategory;
