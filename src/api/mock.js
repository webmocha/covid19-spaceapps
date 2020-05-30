const generateCoordinates = () => ({
  lat: (Math.random() - 0.5) * 90,
  lng: (Math.random() - 0.5) * 360,
});

const dates = [
  '2020-04',
  '2020-03',
  '2020-02',
  '2020-01',
  '2019-12',
  '2019-11',
  '2019-10',
  '2019-09',
  '2019-08',
  '2019-07',
  '2019-06',
  '2019-05',
  '2019-04',
  '2019-03',
  '2019-02',
  '2019-01',
];

const generateLocations = () => [...Array(10).keys()].map(() => ({
  ...generateCoordinates(),
  ['xco2']: Number((Math.random() * 10).toPrecision(4)),
  ['xch4']: Number((Math.random() * 10).toPrecision(4)),
  ['AOT (0.72um)']: Number((Math.random() * 10).toPrecision(4)),
  ['AOT (1.6um)']: Number((Math.random() * 10).toPrecision(4)),
  ['AOT (2.06um)']: Number((Math.random() * 10).toPrecision(4)),
}));

const generateData = () => ({
  data: dates.map(date => ({
    date,
    points: [...generateLocations()],
  })),
});

export default generateData;
