/*
 * @Descripttion: 描述
 * @Author: ljz
 * @Date: 2020-04-25 09:26:42
 * @LastEditors: ljz
 * @LastEditTime: 2020-04-25 20:44:38
 */
import React from 'react';
import RouterView from './router'
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
        <Content><RouterView /></Content>
      </Layout>
    </BrowserRouter>
  </div>
);

export default App;