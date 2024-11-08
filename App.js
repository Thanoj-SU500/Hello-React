import React from "react";
import ReactDOM from "react-dom";
import logo from "./assets/React2.jpg";
import restaurantData from "./jsons/Restaurants.json";

const HeaderComponent = () => (
  <div id="container">
    <div className="header-container">
      <div className="header__logo">
        <img
          className="logo"
          src="https://trademaklogos.s3.ap-south-1.amazonaws.com/5426088.jpeg"
          alt="log0.png"
        ></img>
      </div>
      {/* <div className="header__search">
        <input type="text" placeholder="Search..." />
      </div> */}
      <nav className="header__nav">
        <button className="header__button">Home</button>
        <button className="header__button">About</button>
        <button className="header__button">Contact Us</button>
        <button className="header__button">Cart</button>
      </nav>
      {/* <div className="header__user">
        <img src="https://via.placeholder.com/32" alt="User Icon" />
      </div>  */}
    </div>
  </div>
);

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

const Body = () => {
  return (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for restaurants..."
          className="search-input"
        />
        <button className="search-button">Search</button>
      </div>

      <div className="card-container">
        {restaurantData.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <Body></Body>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
