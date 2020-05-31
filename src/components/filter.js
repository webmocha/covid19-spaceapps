import React, { useState, useEffect } from 'react';

function Filter({ setFilterType }) {
  const [type, setType] = useState('XCO2');
  const types = [
    { label: 'XCO2[ppmv]', value: 'XCO2' },
    { label: 'XCH4[ppmv]', value: 'XCH4' },
    { label: 'aerosolOpticalThickness(0.76)', value: 'AOT0' },
    { label: 'aerosolOpticalThickness(1.6)', value: 'AOT1' },
    { label: 'aerosolOpticalThickness(2.06)', value: 'AOT2' },
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
            <option key={type.value} value={type.value}>{type.label}</option>
          ))
        }
      </select>
    </div>
  )

}

export default Filter;
