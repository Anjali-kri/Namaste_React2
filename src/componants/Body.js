import RestaurantCard from "./RestaurantCard.JS";
import resList from "../Utils/mockData";
import { useState } from "react";

const Body = () => {

    const [listOfRestaurant, setListOfRestaurant] = useState(resList);
    return (
        <div className="body">
            <div className="filter">
                <button className="filter_btn" 
                    onClick={() => {
                        const filteredList = listOfRestaurant.filter(
                            (res) => res.data.avgRating > 4
                        );
                        setListOfRestaurant(filteredList);
                        console.log("clicked");
                    }}
                >
                    Top rated restaurant
                </button>
            </div>
            <div className="restaurrant-container">
                {
                    resList.map((restaurant) => (<RestaurantCard key={restaurant.data.id} resData={restaurant}/>))
                }
            </div>
        </div>
    )
}

export default Body;