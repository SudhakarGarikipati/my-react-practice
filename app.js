const header = React.createElement("h2",{id:"header"}, [
    React.createElement("div", {id:"child1"}, [
        React.createElement("h4", {}, "This is a child1 of child1"),
        React.createElement("h4", {}, "This is a child2 of child1")
    ]),
    React.createElement("div", {id:"child2"}, [
        React.createElement("h4", {}, "This is a child1 of child2"),
        React.createElement("h4", {}, "This is a child2 of child2")
    ])
], "This is a header");
const root1  = ReactDOM.createRoot(document.getElementById("root"));
root1.render(header);