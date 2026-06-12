import { SWIGGY_IMG_URL } from "../utils/constants";

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    totalRatingsString,
    costForTwo,
  } = resData?.info; // Optional chaining
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        alt="res-logo"
        src={SWIGGY_IMG_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <p>
        {avgRating} stars ({totalRatingsString})
      </p>
      <p>{costForTwo}</p>
      <p>{resData.info.sla.deliveryTime} mins</p>
    </div>
  );
};

export default RestaurantCard;
