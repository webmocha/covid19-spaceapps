import React, { useMemo } from "react";
import Globe from "react-globe.gl";  
import image from "./earth-night.jpg";

const World = () => {
 
  return (
    <Globe 
      globeImageUrl={image}
    />
  )
}

export default World;