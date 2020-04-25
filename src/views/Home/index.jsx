/*
 * @Descripttion: 描述
 * @Author: ljz
 * @Date: 2020-04-25 09:36:06
 * @LastEditors: ljz
 * @LastEditTime: 2020-04-25 13:57:14
 */
import React, { useState, useEffect } from 'react';

function Home(props) {

    useEffect(() => {
        setTimeout(() => {
            // props.history.push('/order')
        }, 4000);
    }, [])


    return (<h1> Home 页面</h1>)
}

export default Home