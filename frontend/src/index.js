import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { withStore, store } from 'react-context-hook';
import React from 'react';
import { dbFetchData } from './api-calls/db-requests';

const initialValue = {
  challenges: [],
};

dbFetchData().then((jsonData) => {
  store.set('challenges', jsonData);
});

const AppWithStore = withStore(App, initialValue);

ReactDOM.render(<AppWithStore />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
