import RestaurantCard from "./RestaurantCard.JS";
// import resList from "../Utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [searchTxt, setSearchTxt] = useState("")

    useEffect(() => {
        fetchData();
        console.log("useeffect called");
    }, [])

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940947&lng=85.1375645&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        console.log(json);

        // optional chaining
        setListOfRestaurant(json.data.cards[2].data.data.cards)
    };
    // conditional rendering
    // if (listOfRestaurant.length === 0) {
    //     return <Shimmer />
    // } 


    
    const filterRestaurant = () => {
        
        const filteredData = listOfRestaurant.filter(item=>{
            return item.data.avgRating>4;
        })
        setListOfRestaurant(filteredData)
        console.log(filteredData);
    }

    const filterByName = () => {
        const filterNameRes = listOfRestaurant.filter(item => {
            return item.data.name.include(searchTxt) 
        })
        setListOfRestaurant(filterNameRes);
    }

    return listOfRestaurant.length === 0 ? (
        <Shimmer />
    ) : ( 
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchTxt} onChange={(e) => {
                        setSearchTxt(e.target.value);
                        console.log(setSearchTxt);
                    }}/>
                    <button
                        onClick={filterByName}

                    >
                        Search
                    </button>
                </div>
                <button className="filter_btn" 
                    onClick={filterRestaurant}
                >
                    Top rated restaurant
                </button>
            </div>
            <div className="restaurrant-container">
                {
                    listOfRestaurant.map((restaurant) => (<RestaurantCard key={restaurant.data.id} resData={restaurant}/>))
                }
            </div>
        </div>
    )
}

export default Body;