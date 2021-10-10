import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId="jGnf2QFbcriqO0cKfQ6a0sCPzzTQBBTMA7cwUy14" serverUrl="https://jh9ls4civejm.moralishost.com:2053/server">
    <App />
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
