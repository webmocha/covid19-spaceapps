import React from "react";
import ReactDom from "react-dom";
import Globe from "./globe"; 

const App = () => (
  <div>
    <Globe />
  </div>
);


ReactDom.render(<App/>, document.getElementById("app"));