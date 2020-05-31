import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import Globe from "./globe";
import Timeline from "./components/timeline";

function App() {
  const [currentDate, setCurrentDate] = useState(undefined);

  useEffect(() => {
    console.log(currentDate)
  }, currentDate)

  return (
    <div>
      <Timeline setDate={setCurrentDate} />
      <Globe />
    </div>
  );
}

ReactDom.render(<App/>, document.getElementById("app"));
