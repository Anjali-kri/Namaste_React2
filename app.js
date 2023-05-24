import React from "react";
import ReactDOM  from "react-dom/client";


const Title = () => ( 
    <h1 id="heading" className="head" tabIndex= '5'>
        Namaste react
    </h1>
);

// react functional componant
const HeadingComponant = () => (
    <div id="container">
        <Title />
        <h1 className="heading">Namaste react functional componant</h1>
    </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponant />);
