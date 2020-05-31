import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import Globe from "./globe";
import Timeline from "./components/timeline";
import Filter from "./components/filter";

function App() {
  const [currentDate, setCurrentDate] = useState(undefined);
  const [currentType, setCurrentType] = useState()

  useEffect(() => {
    console.log(currentDate)
    console.log(currentType)
  }, [currentDate, currentType])

  return (
    <div>
      <Timeline setDate={setCurrentDate} />
      <Filter setFilterType={setCurrentType} />
      <Globe />
    </div>
  );
}

ReactDom.render(<App/>, document.getElementById("app"));
