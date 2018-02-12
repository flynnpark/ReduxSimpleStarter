import React from "react";
import ReactDOM from "react-dom";

// Create a new component. This component shuld produce some html

const App = () => { // const는 재할당 하지 못함
    return <div>Hi!</div>;
}

// Take this component's generated HTML and put it on the page
// (in the DOM)

ReactDOM.render(App);
