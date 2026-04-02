import React from "react";
import ReactDOM from "react-dom/client";

const header = React.createElement("h2",{id:"header", key:"header"}, [
    React.createElement("div", {id:"child1", key:"child1"}, [
        React.createElement("h4", {key:"child1-1"}, "This is a child1 of child1"),
        React.createElement("h4", {key:"child1-2"}, "This is a child2 of child1")
    ]),
    React.createElement("div", {id:"child2", key:"child2"}, [
        React.createElement("h4", {key:"child2-1"}, "This is a child1 of child2"),
        React.createElement("h4", {key:"child2-2"}, "This is a child2 of child2")
    ])
], "This is a header 🐛🐛🐛");
const root1  = ReactDOM.createRoot(document.getElementById("root"));
root1.render(header);