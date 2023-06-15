# Namaste react

# parcel
- dev build
- local server
- HMR
- FATER davelopment experince
- caching
- File wathching algorith
- image optimization
- Minification of file also
- Bunduling
- Compress
- Consistant hashing
- code splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- Https
- Tree Shaking

# read parcel.org 


const parent = React.createElement(
//     'div',
//     {id: "parent"},
//     React.createElement(
//         'div',
//         {id: "child"},
//         [React.createElement(
//             'h1',
//             {},
//             "i am h1 tag"
//         ),
//         React.createElement(
//             'h2',
//             {},
//             "i am h1 tag"
//         )]
//     )
// );


# there are two type of componant
- class based componant - old way of writing code
- functional componant - new way


# jsx => Babel transpiles it to react.createElement => ReactElement - js object => HTML Element(render)

# food ordering app
- namaste food

/** 
 * Header
 * -logo
 * -nav items
 * Body
 * -search
 * -restaurrantContainer
 *  - RestaurantCrds
 *    -img
 *    - name of res, star rating, couisines, delevery time stc
 * Footer
 * -CopyRight
 * - Links
 * -Address
 * -Contact
*/


# There are two types of export and import
- default export/import

export default Componant;
import Componant from "path";

- named export/import

export const Componant;
import {Componant} from "path";

# React Hooks
- Its normal javascript utility function function
- useState()
- useEffect()
- its create local state varialble
- whenever a state variable updates react will rerender the componant.
- 
- useEffect is also a react hook, its a normal function just like a function. It have two argument
- callback function
- dependency array

# useEffect Hook
- useEffect(() => {}, []);
- two argument in useEffect
- after body componant render useEffect callback function is called.

# Whenever state variable update, react triggers a reconciliation cycle(re-render the componant)


