/*
 * @Descripttion: 描述
 * @Author: ljz
 * @Date: 2020-04-25 09:36:06
 * @LastEditors: ljz
 * @LastEditTime: 2020-04-25 22:58:44
 */
import React, { useState, useEffect } from 'react';

function UserList(props) {

    useEffect(() => {
        setTimeout(() => {
            // props.history.push('/order')
        }, 4000);
    }, [])


    return (<h1>用户列表页面</h1>)
}

export default UserList