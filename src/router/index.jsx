/*
 * @Descripttion: 描述
 * @Author: ljz
 * @Date: 2020-04-25 09:41:05
 * @LastEditors: ljz
 * @LastEditTime: 2020-04-25 18:06:59
 */
import React, { lazy, Suspense } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom';


//lazy 为react路由懒加载，必须和Suspense配套使用

const routes = [
    {
        path: '/',
        customId: 'qrc_purchase_purchaseOrder',
        component: lazy(() => import('../views/Home')),
    },
    {
        path: '/good',
        customId: 'qrc_purchase_purchaseOrder_detail',
        component: lazy(() => import('../views/Good')),
    },

    {
        path: '/order',
        customId: 'qrc_dispatch_data',
        component: lazy(() => import('../views/Order')),
    },

    {
        path: '/setting',
        customId: 'qrc_fix_fix',
        component: lazy(() => import('../views/Setting')),
    },
    {
        path: '/repair-detail/:id',
        customId: 'qrc_fix_fix_detail',
        component: lazy(() => import('../views/Setting')),
    },
    // {
    //     route: <Route path="/" exact={true} render={() => {
    //         let path = routeUtils.getFirstPathFromMenu(uaaApp.menus)
    //         return <Redirect to={path} />
    //     }} />
    // },
    // {
    //   path: '/404',
    //   component: lazy(() => import('../pages/NotFound'))
    // },
    // {
    //   route: <Route key="NotFound" render={() => <Redirect to="/404" />} />
    // }
]

const router = () => {
    return (
        <div>
            <Switch>
                <Suspense fallback={<div>lodding...</div>}>
                    {routes.map((item => (
                        <Route key={item.customId} exact path={item.path} component={item.component} />
                    )))}
                    <Redirect from="/*" to="/" />
                </Suspense>
            </Switch>
        </div>
    )
}

export default router