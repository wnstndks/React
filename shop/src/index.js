import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// ./ 내가 만든 js파일들은 ./
import App from './App';
import reportWebVitals from './reportWebVitals';
// react router
// 경로가 없는것들은 라이브러리
import {BrowserRouter} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
