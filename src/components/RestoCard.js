
const RestaurantCard = (props) => {
    const { resData } = props;
    return (
      <div className="restaurant-card">
        <img
          src={resData.image}
          alt={resData.name}
          className="restaurant-image"
        />
        <h2 className="restaurant-name">{resData.name}</h2>
        <p className="restaurant-price">{resData.price}</p>
        <p className="restaurant-offers">🤩 {resData.offers}</p>
        <p className="restaurant-delivery">{resData.AppLayoutdeliveryTime}</p>
        <p className="restaurant-rating">⭐ {resData.rating}</p>
      </div>
    );
  };

  export default RestaurantCard;