import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import RouteSwitch from './Components/RouteSwitch';
import '@fortawesome/fontawesome-free/css/all.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouteSwitch />
  </React.StrictMode>
);

