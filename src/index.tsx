import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import {createGlobalStyle} from 'styled-components';

//global style
const Global = createGlobalStyle`
  * {
    margin: 0;
    padding:0;
    box-sizing:border-box;
    font-family:consolas;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <Global/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
