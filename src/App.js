/*
 * @Descripttion: 描述
 * @Author: ljz
 * @Date: 2020-04-25 09:26:42
 * @LastEditors: ljz
 * @LastEditTime: 2020-04-25 14:25:41
 */
import React from 'react';
import Router from './router'
import Header from './components/Header/index'
import SiderMenu from './components/UMemu/index'
import { BrowserRouter } from 'react-router-dom'
import { Layout } from 'antd';

import './App.scss';
const { Content, Sider } = Layout;

const App = () => (
  <div className="app">
    <Header />
    <BrowserRouter>
      <Layout>
        <Sider className="slide-container"><SiderMenu /></Sider>
        <Content><Router /></Content>
      </Layout>
    </BrowserRouter>
  </div>
);

export default App;