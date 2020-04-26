
import React from 'react'
import { Dropdown, Menu } from 'antd'
import { DownOutlined } from '@ant-design/icons';
import './index.scss'
function Header() {
    const handleLoginOut = () => {
        sessionStorage.removeItem('token');
        // window.location.href = window.location.origin;
        window.location.reload(); // 此处为了在GitHub page上演示，所以采用这种方式刷新
    }
    const menu = (<Menu>
        <Menu.Item>
            <div>修改密码</div>
        </Menu.Item>
        <Menu.Item>
            <div onClick={handleLoginOut}>退出</div>
        </Menu.Item>
    </Menu>)
    return <div className="page-header">
        <Dropdown className='dropdown-container' overlay={menu} trigger={['click']}>
            <a className="ant-dropdown-link" href="javasrcipt:void()">
                木子 <DownOutlined />
            </a>
        </Dropdown>
    </div>
}

export default Header