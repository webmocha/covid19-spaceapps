import React, { useState, useEffect } from "react";

function Timeline({ setDate }) {
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState('2020');

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const formattedDisplayMonth = () => months[month];
  const formattedDataMonth = () => {
    const value = Number(month) + 1;
    return value.toLocaleString('en-US', { minimumIntegerDigits: 2 })
  }

  const years = ['2020', '2019', '2018'];

  const handleMonthChange = ({ target: { value } }) => setMonth(value);
  const handleYearChange = ({ target: { value } }) => setYear(value);

  useEffect(() => {
    setDate(`${year}/${formattedDataMonth()}`)
  }, [month, year]);


  return (
    <div>
      <div>
        <label htmlFor='year'>Year</label>
        <select id='year' onChange={handleYearChange}>
          {
            years.map((year) => (
              <option key={year} value={year}>{year}</option>
            ))
          }
        </select>

      </div>
      <div>
        <label htmlFor='month'>Month</label>
        <input id='month' type='range' min='0' max='11'
          value={month}
          onChange={handleMonthChange}
        />
        <p>Month: {formattedDisplayMonth()}</p>
      </div>
    </div>
  )
}

export default Timeline;
