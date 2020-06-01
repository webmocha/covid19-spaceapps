import React, { useState, useEffect, useMemo } from "react";
import ReactDom from "react-dom";
import Globe from "./globe";
import Timeline from "./components/timeline";
import Filter from "./components/filter";

function App() {
  const [currentDate, setCurrentDate] = useState(undefined);
  const [currentType, setCurrentType] = useState()
  const [data, setData] = useState([]);
  const [ cityList, setCityList ] = useState([]);

  const [currentPointInfo, setCurrentPointInfo] = useState({});

  const filteredData = useMemo(() =>
    data
      .filter(d => d.date.includes(currentDate))
      .map(d => ({
        date: d.date,
        latitude: d.latitude,
        longitude: d.longitude,
        gasValue: Number(d[currentType]),
        gasType: currentType
      }))
  , [data, currentDate, currentType])

  const generateCityList = (list) => list.reduce((total, curr) => {
    if (total.filter((item) => item.city === curr.city).length === 1) {
      return total;
    }
    return [...total, curr];
  }, []);

  useEffect(() => {
    fetch(`https://spaceapps.webmocha.com/v1/api/gosat/graphql`, {
      "method": 'POST',
      "content-type": "application/json",
      "body": '{"query": "{ entries @gosat { city, latitude, longitude, date, distance, XCO2, XCH4, AOT0, AOT1, AOT2  } }"}'
    })
    .then(res => res.json())
    .then(data => data.data.entries)
    .then(data => {
      setCityList(generateCityList(data));
      return data;
    })
    .then(data => setData(data))
  }, [])

  return (
    <div style={{ position: 'relative' }}>
      <div style={{
        position: 'absolute',
        backgroundColor: 'white',
        zIndex: 1,
        padding: '10px',
        top: 10,
        left: 10,
      }}>
        <Timeline setDate={setCurrentDate} />
        <Filter setFilterType={setCurrentType} />
      </div>
      <div style={{
        position: 'absolute',
        backgroundColor: 'white',
        zIndex: 1,
        padding: '10px',
        top: 10,
        right: 10,
        width: '250px',
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
        }}>
          <span>
            Date: {currentPointInfo && currentPointInfo.date}
          </span>
          <span>
            Type: {currentPointInfo && currentPointInfo.gasType}
          </span>
          <span>
            Value: {currentPointInfo && currentPointInfo.gasValue}
          </span>
        </div>
      </div>
      <Globe
        data={filteredData}
        cities={cityList}
        handleCurrentPoint={setCurrentPointInfo}
      />
    </div>
  );
}

ReactDom.render(<App/>, document.getElementById("app"));
