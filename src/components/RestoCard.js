const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="restaurant-card">
      <div className="restaurant-image-container">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            resData?.info?.cloudinaryImageId
          }
          alt={resData?.info?.name}
          className="restaurant-image"
        />
      </div>
      <h2 className="restaurant-name">{resData?.info?.name}</h2>
      <div className="restoInfo">
        <p className="restaurant-price">{resData?.info?.price}</p>
        <p className="restaurant-offers">
          🤩 {resData?.info?.aggregatedDiscountInfoV3?.header}
        </p>
        <p className="restaurant-delivery">
          🛵 {resData?.info?.sla?.slaString}
        </p>
        <p className="restaurant-rating">⭐ {resData?.info?.avgRating}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
