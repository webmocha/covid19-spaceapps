import React, { useState, useEffect, useMemo } from "react";
import ReactDom from "react-dom";
import Globe from "./globe";
import Timeline from "./components/timeline";
import Filter from "./components/filter";

function App() {
  const [currentDate, setCurrentDate] = useState(undefined);
  const [currentType, setCurrentType] = useState()
  const [data, setData] = useState([]);

  const filteredData = useMemo(() => 
    data
      .filter(d => d.date.includes(currentDate))
      .map(d => ({
        date: d.date,
        latitude: d.latitude,
        longitude: d.longitude,
        gasValue: d[currentType],
        gasType: currentType
      }))
  , [data, currentDate, currentType])

  useEffect(() => {
    fetch(`https://spaceapps.webmocha.com/v1/api/gosat/graphql`, {
      "method": 'POST',
      "content-type": "application/json",
      "body": '{"query": "{ entries @gosat { city, latitude, longitude, date, distance, XCO2, XCH4, AOT0, AOT1, AOT2  } }"}' 
    })
    .then(res => res.json())
    .then(data => setData(data.data.entries))
  }, [])

  return (
    <div>
      <Timeline setDate={setCurrentDate} />
      <Filter setFilterType={setCurrentType} />
      <Globe data={filteredData} />
    </div>
  );
}

ReactDom.render(<App/>, document.getElementById("app"));
