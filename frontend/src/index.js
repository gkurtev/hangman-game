import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { withStore } from 'react-context-hook';
import React from 'react';
import { dummyData } from './data/dummy-data';

const initialValue = {
  hangmanData: dummyData,
};

const AppWithStore = withStore(App, initialValue);

ReactDOM.render(<AppWithStore />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
