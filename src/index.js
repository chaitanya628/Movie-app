import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './screens/home/Home';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Details from './screens/detail/Details';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Details />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
