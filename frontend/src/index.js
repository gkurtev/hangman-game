import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { withStore, store } from 'react-context-hook';
import React from 'react';
import { fetchData } from './actions/store-actions';

const initialValue = {
  challenges: [],
};

fetchData().then((jsonData) => {
  store.set('challenges', jsonData);
});

const AppWithStore = withStore(App, initialValue);

ReactDOM.render(<AppWithStore />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
