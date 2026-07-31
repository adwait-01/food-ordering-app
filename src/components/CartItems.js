import { SWIGGY_IMG_URL } from "../utils/constants";

const CartItems = ({ items }) => {
  return (
    <div>
      {items.map((item) => {
        let price = 0;

        if (item?.card?.info?.finalPrice) {
          price = item.card.info.finalPrice / 100;
        } else if (item?.card?.info?.defaultPrice) {
          price = item.card.info.defaultPrice / 100;
        } else if (item?.card?.info?.price) {
          price = item.card.info.price / 100;
        }

        return (
          <div
            key={item?.card?.info?.id}
            className="p-2 m-2 border-b-2 border-gray-300 text-left flex justify-between items-center"
          >
            <div className="w-9/12 m-2">
              <div className="py-2">
                <span className="font-bold text-md">
                  {item?.card?.info?.name}
                </span>
                <span>- ₹{price}</span>
              </div>
              {/* <p className="text-xs">{item?.card?.info?.description}</p> */}
            </div>
            <div className="w-3/12 relative">
              {item?.card?.info?.imageId && (
                <img
                  className="h-auto rounded-lg"
                  src={SWIGGY_IMG_URL + item?.card?.info?.imageId}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartItems;
