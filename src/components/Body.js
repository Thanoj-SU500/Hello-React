import restaurantList from "../../jsons/Restaurants.json";
import RestaurantCard from "./RestoCard";
import { useState } from "react";

const Body = () => {
// const [restaurants, setrestaurantList] = useState(restaurantList);
const [topRatedResto, setTopRatedResto] = useState(false);
const restaurants = topRatedResto ? restaurantList.filter(resto => resto.rating > 4) : restaurantList;
const filterTopRatedResto = () => {
    setTopRatedResto(val => !val)
}
  return (
    <div className="body">
      <div className="action-container">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for restaurants..."
            className="search-input"
          />
          <button className="search-button">Search</button>
        </div>
        <div className="filte-container">
          <button className="filter-btn" onClick={filterTopRatedResto}>
            {topRatedResto ? "Show All": "Top Rated"}
          </button>
        </div>
      </div>

      <div className="card-container">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
