import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './App';
import ReactGA from 'react-ga';

const TRACKING_ID = "UA-168814977-1"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



