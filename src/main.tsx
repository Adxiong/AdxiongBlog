/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-10-07 23:14:56
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-10-15 16:48:10
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
