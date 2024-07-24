const heading = React.createElement("div",{id: "parent"},[React.createElement("div",{id: "child1"},[React.createElement("h1",{},"hello world"),
    React.createElement("h2",{},"hello world")]),
    React.createElement("div",{id: "child2"},[React.createElement("h1",{},"hello world"),
        React.createElement("h2",{},"hello world")])]);
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(heading);