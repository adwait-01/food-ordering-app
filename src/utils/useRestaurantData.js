import { useState, useEffect } from "react";

const useRestaurantData = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?url=https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.2421273&lng=84.8075572&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    const restaurantCard = json?.data?.cards?.find(
      (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    const restaurantsArray =
      restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
      [];

    setListOfRestaurants(restaurantsArray);
  };

  return listOfRestaurants;
};

export default useRestaurantData;
