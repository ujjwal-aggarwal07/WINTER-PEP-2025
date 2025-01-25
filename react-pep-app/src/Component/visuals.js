import React from 'react';
import { ScatterChart, Scatter,XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ZAxis } from 'recharts';
import airQJson from '../airquality_data.json';
const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function Visuals()
{
  var punjabData = airQJson.records.filter((data) => data.state === "Uttar_Pradesh");
  var coData = punjabData.filter((data) => data.pollutant_id === "CO");
  var so2Data = punjabData.filter((data) => data.pollutant_id === "SO2");
  return (
    <>
      {/* <p>airQJson.records[]</p> */}
        <ScatterChart width={1024} height={500} margin={{top: 5, right: 30,left: 20,bottom: 5,}}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="max_value" />
        <YAxis tickCount="5" dataKey="avg_value" />
        <ZAxis dataKey="city" />
          <Tooltip />
          <Legend />
          <Scatter shape='diamond' data={coData}/>
          {/* <Scatter type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
          <Scatter shape='circle' fill="#82ca9d"  data={so2Data}/>
        
      </ScatterChart>
      </>
    );
}
