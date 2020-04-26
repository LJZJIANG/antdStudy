/*
 * @Descripttion: 描述
 * @Author: ljz
 * @Date: 2020-04-25 09:41:05
 * @LastEditors: ljz
 * @LastEditTime: 2020-04-26 08:47:48
 */
import React, { lazy, Suspense } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Loading from '../components/Loading';


//lazy 为react路由懒加载，必须和Suspense配套使用

const routes = [
    {
        path: '/',
        customId: 'qrc_purchase_purchaseOrder',
        component: lazy(() => import('../views/UserList')),
    },
    {
        path: '/role',
        customId: 'qrc_purchase_purchaseOrder_detail',
        component: lazy(() => import('../views/RoleList')),
    },

    {
        path: '/log',
        customId: 'qrc_dispatch_data',
        component: lazy(() => import('../views/LogList')),
    },

    {
        path: '/api',
        customId: 'qrc_fix_fix',
        component: lazy(() => import('../views/ApiList')),
    },
    // {
    //     path: '/repair-detail/:id',
    //     customId: 'qrc_fix_fix_detail',
    //     component: lazy(() => import('../views/Setting')),
    // },
    // {
    //   path: '/404',
    //   component: lazy(() => import('../pages/NotFound'))
    // },
]

const router = () => {
    return (
        <Switch>
            <Suspense fallback={<Loading />}>
                {routes.map((item => (
                    <Route key={item.customId} exact path={item.path} component={item.component} />
                )))}
            </Suspense>
            <Redirect from="/*" to="/" />
        </Switch>
    )
}

export default router