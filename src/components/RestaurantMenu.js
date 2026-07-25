import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import RestaurantMenuCategory from "./RestaurantMenuCategory";
import { useParams } from "react-router-dom";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(0);

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const restaurantCard = resInfo?.cards?.find((card) => card?.card?.card?.info);

  const { name, cuisines, costForTwoMessage } =
    restaurantCard?.card?.card?.info ?? {};
  const { itemCards } =
    resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card
      ?.card;

  // console.log(resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>
      {/* Accordion items */}
      {categories.map((category, index) => (
        // Controlled component:
        <RestaurantMenuCategory
          key={category?.card?.card?.categoryId}
          data={category?.card?.card}
          showItems={index === showIndex && true}
          settingShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
