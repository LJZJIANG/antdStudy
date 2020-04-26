/*
 * @Descripttion: 描述
 * @Author: ljz
 * @Date: 2020-04-25 09:26:42
 * @LastEditors: ljz
 * @LastEditTime: 2020-04-26 11:39:00
 */
import React from 'react';
import RouterView from './router'
import Header from './components/Header/index'
import SiderMenu from './components/UMemu/index'
import { BrowserRouter, withRouter } from 'react-router-dom'
import { Layout } from 'antd';

import './App.scss';
const { Content, Sider } = Layout;
//withRouter 把不是通过路由切换过来的组件中，将react-router 的 history、location、match 三个对象传入props对象上
let Menu = withRouter(SiderMenu);

const App = () => (
  <div className="app">
    <Header />
    <BrowserRouter>
      <Layout>
        <Sider className="slide-container"><Menu /></Sider>
        <Content><RouterView /></Content>
      </Layout>
    </BrowserRouter>
  </div>
);

export default App;