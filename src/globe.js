import React from "react";
import GlobeComponent from "react-globe.gl";
import image from "./earth-night.jpg";

const Globe = ({ data, cities, handleCurrentPoint }) => {
  return (
    <GlobeComponent
      globeImageUrl={image}
      pointsData={data}
      pointLat='latitude'
      pointLng='longitude'
      pointAltitude={({ gasType, gasValue }) => {
        if (gasType === 'XCO2' || gasType === 'XCH4') {
          return gasValue / 1000
        }
        return gasValue
      }}
      onPointHover={handleCurrentPoint}
      pointRadius={0.1}
      labelsData={cities}
      labelLat='latitude'
      labelLng='longitude'
      labelText='city'
    />
  )
}

export default Globe;
