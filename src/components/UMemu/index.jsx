
import _ from 'lodash';
import React from 'react';
import { Menu } from 'antd';
import * as Icon from '@ant-design/icons';
import { withRouter } from 'react-router-dom'
import menuList from '../../config/menu'

const { SubMenu } = Menu;

class SiderMenu extends React.Component {
    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

    state = {
        openKeys: ['sub1'],
        menuNodes: []
    };

    componentDidMount() {
        this.setState({
            menuNodes: this.buildMenu(menuList)
        })
    }

    onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    };

    handleToPage(item) {
        if (item.level === 1 && item.url)
            this.props.history.push(`${item.url}`)
    }

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
                nodes.push(<Menu.Item key={item.customId} onClick={() => { this.handleToPage(item) }}>{item.text}</Menu.Item>)
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
                style={{ width: 200 }}
            >
                {this.state.menuNodes}
            </Menu>
        );
    }
}

export default withRouter(SiderMenu);