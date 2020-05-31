import React from "react";
import GlobeComponent from "react-globe.gl";
import image from "./earth-night.jpg";

const Globe = ({ data, cities }) => {
  console.log(data)

  return (
    <GlobeComponent
      globeImageUrl={image}
      pointsData={data}
      pointLat='latitude'
      pointLng='longitude'
      pointsMerge={true}
      labelsData={cities}
      labelLat='latitude'
      labelLng='longitude'
      labelText='city'
    />
  )
}

export default Globe;
