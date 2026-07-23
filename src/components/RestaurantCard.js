import { SWIGGY_IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    totalRatingsString,
    costForTwo,
    sla,
  } = resData?.info; // Optional chaining

  return (
    <div className="m-4 p-4 w-62.5 rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={SWIGGY_IMG_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4">{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <p>
        {avgRating} stars ({totalRatingsString})
      </p>
      <p>{costForTwo}</p>
      <p>{sla?.deliveryTime} mins</p>
    </div>
  );
};

export default RestaurantCard;
