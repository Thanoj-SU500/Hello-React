import RestaurantCard from "./RestoCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";

const Body = () => {
let [restaurants, setrestaurantList] = useState([]);
const [topRatedResto, setTopRatedResto] = useState(false);
let [searchedResto, setSearchResult] = useState([]);
const [topList, setTopList] = useState([]);
searchedResto = topRatedResto ? searchedResto.filter(resto => resto?.info?.avgRating > 4.5) : searchedResto;
const [searchText, setSearchText] = useState('')

const filterTopRatedResto = () => {
    setTopRatedResto(val => !val)
}

useEffect(()=> {
    fetchRestaurants()
}, []
)

const fetchRestaurants = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const response = await data.json();
    console.log(response);
    setrestaurantList(response?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants)
    setSearchResult(response?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants)
} 

if (restaurants?.length === 0) {
    return <Shimmer/>
}

  return restaurants?.length === 0 ? (<Shimmer/>) : (
    <div className="body">
      <div className="action-container">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for restaurants..."
            className="search-input"
            value={searchText} onChange={ (e) => {
                setSearchText(e.target.value)
            }}
          />
          <button className="search-button" onClick={ () => {
            const data = restaurants.filter((resto) => resto?.info?.name.toLowerCase().includes(searchText.toLowerCase()) );
            setSearchResult(data)
          }}>Search</button>
        </div>
        <div className="filte-container">
          <button className="filter-btn" onClick={filterTopRatedResto}>
            {topRatedResto ? "Show All": "Top Rated"}
          </button>
        </div>
      </div>

      <div className="card-container">
        {searchedResto.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
