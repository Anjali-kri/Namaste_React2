const parent = React.createElement(
    'div',
    {id: "parent"},
    React.createElement(
        'div',
        {id: "child"},
        [React.createElement(
            'h1',
            {},
            "i am h1 tag"
        ),
        React.createElement(
            'h2',
            {},
            "i am h1 tag"
        )]
    )
);

// const heading = React.createElement(
//     "H1",
//     {id: "heading"}, 
//     "Hello world from react"
// );
// console.log(heading);
const root = ReactDOM .createRoot(document.getElementById("root"));
// root.render(heading);
root.render(parent);