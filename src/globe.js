import React, { useMemo } from "react";
import GlobeComponent from "react-globe.gl";  
import image from "./earth-night.jpg";

const Globe = ({ data }) => {
  console.log('DATA', data)
  return (
    <GlobeComponent 
      globeImageUrl={image}
    />
  )
}

export default Globe;