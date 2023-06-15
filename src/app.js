import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./componants/Header";
import Body from "./componants/Body";
import RestaurantCard from "./componants/RestaurantCard.JS";
import { createBrowserRouter } from "react-router-dom";


const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />
    },
    {
        path: "/about",
        element: <About />
    }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
