// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Notifications from './Notifications';

ReactDOM.render(
  <>
    <div id="root-app">
      <App />
    </div>
    <div id="root-notifications">
      <Notifications />
    </div>
  </>,
  document.getElementById('root')
);
