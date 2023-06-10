import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./componants/Header";
import Body from "./componants/Body";
import RestaurantCard from "./componants/RestaurantCard.JS";


const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
