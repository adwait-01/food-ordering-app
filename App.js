import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://cdn.creativefabrica.com/2020/02/12/Food-Logo-Graphics-1-99-580x386.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  // console.log(props);
  // 1. Instead of (props), we can write ({resName, cuisine}) -> This is known as 'object destructuring' which we do in javascript. Instead of writing {props.resName} in the above case, we directly write {resName} in this case when we use that prop.
  // 2. We can also do -> const {resName, cuisine} = props; here and then use the same way instead of doing directly inside () -> which(1) is called object destructuring on the fly.
  const { resData } = props;
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          resData.data.cloudinaryImageId
        }
      />
      <h3>{resData.info.name}</h3>
      <p>{resData.info.cuisines.join(", ")}</p>
      {/* As 'cuisines' was an array, we used join(", ") to separate the array values by comma and a space. This is a javascript concept. Read about join() of arrays in javascript from MDN. */}
      <p>
        {resData.info.avgRating} stars ({resData.data.totalRatings})
      </p>
      <p>{resData.info.costForTwo}</p>
      <p>{resData.info.sla.deliveryTime} mins</p>
    </div>
  );
};

// Generally data is not passed as string directly to each component right. We don't pass the props one by one to the component by ourselves for each component.
// A data comes from backend to us in the form of a JSON.

// KFC data from old swiggy API:
// const resObj = {
//   type: "restaurant",
//   data: {
//     type: "F",
//     id: "334475",
//     name: "KFC",
//     uuid: "caed0e3b-7c0e-4367-8f59-f41d309fb93a",
//     city: "1",
//     area: "BTM Layout",
//     totalRatingsString: "500+ ratings",
//     cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",

//     cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],

//     costForTwo: 40000,
//     costForTwoString: "₹400 FOR TWO",

//     deliveryTime: 36,
//     minDeliveryTime: 36,
//     maxDeliveryTime: 36,

//     slaString: "36 MINS",
//     lastMileTravel: 3.5,

//     slugs: {
//       restaurant: "kfc-btm-layout-btm",
//       city: "bangalore",
//     },

//     cityState: "1",

//     address: "KFC restaurants, 942, SV Tower, 16th Main, BTM 2nd Stage, ...",

//     locality: "2nd Stage",
//     parentId: 547,

//     unserviceable: false,
//     veg: false,
//     select: false,
//     favorite: false,

//     aggregatedDiscountInfo: {
//       header: "FREE DELIVERY",
//       shortDescriptionList: [
//         {
//           meta: "FREE DELIVERY",
//           discountType: "FREE_DELIVERY",
//           operationType: "RESTAURANT",
//         },
//       ],
//     },

//     aggregatedDiscountInfoV2: {
//       descriptionList: [
//         {
//           meta: "FREE DELIVERY",
//           discountType: "FREE_DELIVERY",
//           operationType: "RESTAURANT",
//         },
//       ],
//     },

//     ribbon: [
//       {
//         type: "PROMOTED",
//       },
//     ],

//     feeDetails: {
//       fees: [],
//       totalFees: 0,
//     },

//     availability: {
//       opened: true,
//     },

//     longDistanceEnabled: 0,
//     rainMode: "NONE",

//     thirdPartyAddress: false,
//     thirdPartyVendor: "",

//     badges: {
//       imageBased: [],
//       textBased: [],
//       textExtendedBadges: [],
//     },

//     lastMileTravelString: "3.5 kms",
//     hasSurge: false,

//     sla: {
//       restaurantId: "334475",
//       deliveryTime: 36,
//       minDeliveryTime: 36,
//       maxDeliveryTime: 36,
//       lastMileTravel: 3.5,
//       lastMileDistance: 0,
//       serviceability: "SERVICEABLE",
//       rainMode: "NONE",
//       longDistance: "NOT_LONG_DISTANCE",
//       preferentialService: false,
//       iconType: "EMPTY",
//     },

//     promoted: true,
//     avgRating: "3.8",
//     totalRatings: 500,
//     new: false,
//   },
//   subtype: "basic",
// };
// As we can see, the production level codes have a different heirarchy of data.
// Now we can pass this object directly to the component by doing resData={resObj}.

const resObj = {
  info: {
    id: "123456",
    name: "Pizza Paradise",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/6def0f0f-9e6c-45c0-b5e6-05af750f27b5_795906.JPG",
    locality: "MG Road",
    areaName: "Central District",
    costForTwo: "₹400 for two",
    cuisines: ["Pizza", "Italian", "Fast Food"],
    avgRating: 4.3,
    avgRatingString: "4.3",
    totalRatingsString: "10K+ ratings",
    veg: false,
    sla: {
      deliveryTime: 30,
      lastMileTravel: 3.5,
      slaString: "30 mins",
    },
    aggregatedDiscountInfoV3: {
      header: "50% OFF",
      subHeader: "UPTO ₹100",
    },
  },
};

const resList = [
  {
    info: {
      id: "123456",
      name: "Pizza Paradise",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/6def0f0f-9e6c-45c0-b5e6-05af750f27b5_795906.JPG",
      locality: "MG Road",
      areaName: "Central District",
      costForTwo: "₹400 for two",
      cuisines: ["Pizza", "Italian", "Fast Food"],
      avgRating: 4.3,
      avgRatingString: "4.3",
      totalRatingsString: "10K+ ratings",
      veg: false,
      sla: {
        deliveryTime: 30,
        lastMileTravel: 3.5,
        slaString: "30 mins",
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
    },
  },
  {
    info: {
      id: "234567",
      name: "Burger Hub",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/acfcaacc-edf0-4189-8264-d614d312c0ee_740457.JPG",
      locality: "Park Street",
      areaName: "Downtown",
      costForTwo: "₹300 for two",
      cuisines: ["Burgers", "American", "Fast Food"],
      avgRating: 4.5,
      avgRatingString: "4.5",
      totalRatingsString: "15K+ ratings",
      veg: false,
      sla: {
        deliveryTime: 25,
        lastMileTravel: 2,
        slaString: "25 mins",
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
    },
  },
  {
    info: {
      id: "345678",
      name: "Green Bites",
      cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
      locality: "Residency Road",
      areaName: "South Zone",
      costForTwo: "₹250 for two",
      cuisines: ["Healthy Food", "Salads", "Vegan"],
      avgRating: 4.7,
      avgRatingString: "4.7",
      totalRatingsString: "8K+ ratings",
      veg: true,
      sla: {
        deliveryTime: 20,
        lastMileTravel: 1.5,
        slaString: "20 mins",
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
    },
  },
  {
    info: {
      id: "456789",
      name: "Spice Kingdom",
      cloudinaryImageId: "rng/md/carousel/production/indian101",
      locality: "Brigade Road",
      areaName: "City Center",
      costForTwo: "₹500 for two",
      cuisines: ["Indian", "North Indian", "Biryani"],
      avgRating: 4.2,
      avgRatingString: "4.2",
      totalRatingsString: "12K+ ratings",
      veg: false,
      sla: {
        deliveryTime: 35,
        lastMileTravel: 4,
        slaString: "35 mins",
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
    },
  },
  {
    info: {
      id: "567890",
      name: "Chinese Dragon",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/ba9f1f59-30d5-44de-afad-df6db8471ead_9648.jpg",
      locality: "Commercial Street",
      areaName: "East District",
      costForTwo: "₹350 for two",
      cuisines: ["Chinese", "Asian", "Thai"],
      avgRating: 4.4,
      avgRatingString: "4.4",
      totalRatingsString: "9K+ ratings",
      veg: false,
      sla: {
        deliveryTime: 28,
        lastMileTravel: 2.8,
        slaString: "28 mins",
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
    },
  },
  {
    info: {
      id: "678901",
      name: "Dessert Delight",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/8/731001f1-f1c4-4f5f-849f-79a697cb0b72_390173.jpg",
      locality: "Lavelle Road",
      areaName: "West End",
      costForTwo: "₹200 for two",
      cuisines: ["Desserts", "Ice Cream", "Bakery"],
      avgRating: 4.6,
      avgRatingString: "4.6",
      totalRatingsString: "7K+ ratings",
      veg: true,
      sla: {
        deliveryTime: 22,
        lastMileTravel: 1.8,
        slaString: "22 mins",
      },
      aggregatedDiscountInfoV3: {
        header: "25% OFF",
        subHeader: "UPTO ₹60",
      },
    },
  },
  {
    info: {
      id: "789012",
      name: "Sushi Station",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/acfcaacc-edf0-4189-8264-d614d312c0ee_740457.JPG",
      locality: "Indiranagar",
      areaName: "Uptown",
      costForTwo: "₹800 for two",
      cuisines: ["Japanese", "Sushi", "Asian"],
      avgRating: 4.8,
      avgRatingString: "4.8",
      totalRatingsString: "5K+ ratings",
      veg: false,
      sla: {
        deliveryTime: 40,
        lastMileTravel: 5.2,
        slaString: "40 mins",
      },
      aggregatedDiscountInfoV3: {
        header: "15% OFF",
        subHeader: "UPTO ₹150",
      },
    },
  },
  {
    info: {
      id: "890123",
      name: "South Spice",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/6def0f0f-9e6c-45c0-b5e6-05af750f27b5_795906.JPG",
      locality: "Jayanagar",
      areaName: "South Bangalore",
      costForTwo: "₹300 for two",
      cuisines: ["South Indian", "Dosa", "Idli"],
      avgRating: 4.5,
      avgRatingString: "4.5",
      totalRatingsString: "11K+ ratings",
      veg: true,
      sla: {
        deliveryTime: 25,
        lastMileTravel: 3,
        slaString: "25 mins",
      },
      aggregatedDiscountInfoV3: {
        header: "35% OFF",
        subHeader: "UPTO ₹70",
      },
    },
  },
  {
    info: {
      id: "901234",
      name: "Pasta Palace",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/17/7bd350a8-55e7-459b-83a2-e250e670d194_14558.JPG",
      locality: "Koramangala",
      areaName: "Tech Hub",
      costForTwo: "₹450 for two",
      cuisines: ["Italian", "Pasta", "Continental"],
      avgRating: 4.1,
      avgRatingString: "4.1",
      totalRatingsString: "6K+ ratings",
      veg: false,
      sla: {
        deliveryTime: 32,
        lastMileTravel: 3.8,
        slaString: "32 mins",
      },
      aggregatedDiscountInfoV3: {
        header: "45% OFF",
        subHeader: "UPTO ₹90",
      },
    },
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard resData={resObj} />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

root.render(<AppLayout />);
