import React, { useState, useEffect } from 'react';

function Filter({ setFilterType }) {
  const [type, setType] = useState('XCO2[ppmv]');
  const types = [
    'XCO2[ppmv]',
    'XCH4[ppmv]',
    'aerosolOpticalThickness(0.76)',
    'aerosolOpticalThickness(1.6)',
    'aerosolOpticalThickness(2.06)',
  ];

  const handleTypeChange = ({ target: { value } }) => setType(value);

  useEffect(() => {
    setFilterType(type);
  }, [type]);

  return (
    <div>
      <label htmlFor='type'>Type</label>
      <select id='type' onChange={handleTypeChange}>
        {
          types.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))
        }
      </select>
    </div>
  )

}

export default Filter;
