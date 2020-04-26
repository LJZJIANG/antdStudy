/*
 * @Descripttion: 描述
 * @Author: ljz
 * @Date: 2020-04-25 09:26:42
 * @LastEditors: ljz
 * @LastEditTime: 2020-04-26 10:25:19
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './views/Login';
import * as serviceWorker from './serviceWorker';

let token = sessionStorage.getItem('token')
var renderDom = token ? <App /> : <Login />;
ReactDOM.render(
  renderDom
  ,
  document.getElementById('root')
);
serviceWorker.unregister();
