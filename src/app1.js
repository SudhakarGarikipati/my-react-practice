import React from "react";
import ReactDOM from "react-dom/client";

// const header = React.createElement("h2",{id:"header", key:"header"}, [
//     React.createElement("div", {id:"child1", key:"child1"}, [
//         React.createElement("h4", {key:"child1-1"}, "This is a child1 of child1"),
//         React.createElement("h4", {key:"child1-2"}, "This is a child2 of child1")
//     ]),
//     React.createElement("div", {id:"child2", key:"child2"}, [
//         React.createElement("h4", {key:"child2-1"}, "This is a child1 of child2"),
//         React.createElement("h4", {key:"child2-2"}, "This is a child2 of child2")
//     ])
// ], "This is a header 🐛🐛🐛");

// JSX react element
//const header = <h1 className="header"> Hello, React from JSX 🎶🎶🐧</h1>
// const header = <h1 className="header"> Hello, React from JSX 🎶🎶🐧</h1>

// // Arrow function component
// const SubHeader2 = () => <h3 className="sub-header-2"> 🐧🐧🐧 This is a sub header 2 </h3>
// const num1 = 10, num2 = 20 ;
// // FUnctional component 
// const SubHeader1 = () => {
//     return (
//     <div>
//     {header} {/*This is how we can use react element in functional component */}
//     sum: { num1 + num2} {/* This is how we can use js expression in functional component */}
//     <h2 className="sub-header">🐧🐧 This is a sub header </h2>
//     <SubHeader2 /> {/* This is how we can use one functional component inside another functional component */}
//     </div>
//     )
// }

// const root1  = ReactDOM.createRoot(document.getElementById("root"));
// root1.render(<SubHeader1 /> );
import { useEffect } from "react";
import Counter from "./Counter";


const App1 = () => {

  return (
    <div>
     <Counter init={10} />
    </div>
  );
};

export default App1;