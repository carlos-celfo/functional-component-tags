import React from "react";
import ReactDOM from "react-dom";
import NameTag from "./NameTag";

import "./styles.css";

const App = () => (
  <div className="App">
    <h1>Name Tag Generator</h1>
    <NameTag name="Brenda" />
    <NameTag name="Goofy" />
    <NameTag name="Paula" />
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
