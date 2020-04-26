
import _ from 'lodash';
import React from 'react';
import { Menu } from 'antd';
import * as Icon from '@ant-design/icons';
import menuList from '../../config/menu'

const { SubMenu } = Menu;

class SiderMenu extends React.Component {
    state = {
        openKeys: [],
        selectedKeys: [],
        menuNodes: []
    };

    componentDidMount() {
        this.handleOpenAndSelected(this.props.location.pathname)
        this.setState({
            menuNodes: this.buildMenu(menuList)
        })
    }

    onOpenChange = openKeys => {
        this.setState({ openKeys: openKeys })
    };

    handleMenuClick = (e) => {
        let menu = this.findMenuByKey(e.key);
        if (menu && menu.url) {
            this.props.history.push(`${menu.url}`);
            this.setState({
                selectedKeys: [e.key]
            })
        }
    }

    // 刷新后设置之前选中的菜单
    handleOpenAndSelected = (pathname) => {
        let opens = [];
        let selecteds = [];
        const recursion = (items, parents) => {
            for (const item of items) {
                if (item.url === pathname) {
                    selecteds.push(item.customId);
                    opens = opens.concat(parents);
                }
                if (item.items && item.items.length) {
                    parents.push(item.customId);
                    recursion(item.items, parents);
                    parents.pop();
                }
            }
        }
        recursion(menuList, []);
        this.setState({
            selectedKeys: selecteds,
            openKeys: opens
        })
    }

    findMenuByKey = key => {
        let result = null
        const recursion = (items) => {
            for (const item of items) {
                if (item.customId == key) {
                    result = item
                }
                if (result == null && item.items) {
                    recursion(item.items)
                }
            }
        }
        recursion(menuList)
        return result
    }
    /**
     * 递归渲染菜单 菜单数据
     * @param {*} items 
     */
    buildMenu(items) {
        if (!_.isArray(items) || items.length === 0) {
            return null
        }
        var nodes = [];
        for (const item of items) {
            if (item.items && item.items.length && item.type === 'GROUP') {
                nodes.push(
                    <SubMenu key={item.customId} title={this.bindMenuTitle(item)}>
                        {this.buildMenu(item.items)}
                    </SubMenu>
                )
            } else if (item.level !== 2) {
                nodes.push(<Menu.Item key={item.customId}>{item.text}</Menu.Item>)
            }
        }
        return nodes
    }

    bindMenuTitle(item) {
        return (
            <span>
                {React.createElement(
                    Icon[item.icon])}
                <span>{item.text}</span>
            </span>
        )
    }

    render() {
        return (
            <Menu
                mode="inline"
                openKeys={this.state.openKeys}
                onOpenChange={this.onOpenChange}
                onClick={this.handleMenuClick}
                selectedKeys={this.state.selectedKeys}
                style={{ width: 200 }}
            >
                {this.state.menuNodes}
            </Menu>
        );
    }
}

export default SiderMenu;