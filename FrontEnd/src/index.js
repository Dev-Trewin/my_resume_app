import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './index.css';
import  './css/App.css';
import  './css/Contact.css';
import  './css/Portfolio.css';
import  './css/ProjectList.css';
import './css/SignUpAccount.css';

import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
