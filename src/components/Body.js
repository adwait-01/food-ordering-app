import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    // console.log("useEffect called");
    fetchData();
  }, []);

  // console.log("Body rendered")

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.26570291996979&lng=85.84314675817616&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);
    // Optional chaining:
    const restaurantCard = json?.data?.cards?.find(
      (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
    ); // I did this to find the card which contains the restaurants array because the index of the card containing the restaurants in the cards[] kept changing in the live Swiggy API response.

    const restaurantsArray =
      restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
      [];
    // console.log(restaurantsArray);
    // console.log(restaurantsArray.length);

    setListOfRestaurants(restaurantsArray);
  };

  if (listOfRestaurants.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // console.log("Button clicked");
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating >= 4
            );
            // console.log(newList);
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
