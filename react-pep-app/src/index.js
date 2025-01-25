import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CAll from './Component/day1';
import Intersercalculator from './Component/CAL_Interest';
import Visuals from './Component/visuals';
// import Visuals from './Component/Visuals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Visuals/>
    {/* <App /> */}
    {/* <CAll /> */}
    {/* <DataSend></DataSend> */}
    <Intersercalculator></Intersercalculator>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
