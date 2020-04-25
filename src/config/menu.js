const menuList = [
    {
        "id": 14,
        "application": "example",
        "type": "GROUP",
        "text": "系统管理",
        "customId": "system-config",
        "icon": 'AppstoreOutlined',
        "orderIndex": "1",
        "module": null,
        "url": null,
        "level": 0,
        "isSelect": false,
        "items": [
            {
                "id": 16,
                "application": "system-config",
                "type": "INNER_LINK",
                "text": "用户管理",
                "customId": "system-config-user-list",
                "icon": null,
                "orderIndex": "1",
                "module": "用户管理",
                "url": "/",
                "level": 1,
                "isSelect": false,
                "items": [
                    {
                        "id": 17,
                        "application": "system-config-user-list",
                        "type": "RESOURCE_INNER_LINK",
                        "text": "用户列表",
                        "customId": "user-center-list",
                        "icon": null,
                        "orderIndex": "1",
                        "module": "用户管理",
                        "url": "/admin/core-user/tbuser/userList",
                        "level": 2,
                        "isSelect": false,
                        "items": [

                        ]
                    },
                    {
                        "id": 18,
                        "application": "system-config-user-list",
                        "type": "RESOURCE_INNER_LINK",
                        "text": "用户新增",
                        "customId": "user-center-save",
                        "icon": null,
                        "orderIndex": "2",
                        "module": "用户管理",
                        "url": "/admin/core-user/tbuser/saveUser",
                        "level": 2,
                        "isSelect": false,
                        "items": [

                        ]
                    },
                    {
                        "id": 19,
                        "application": "system-config-user-list",
                        "type": "RESOURCE_INNER_LINK",
                        "text": "用户修改",
                        "customId": "user-center-update",
                        "icon": null,
                        "orderIndex": "3",
                        "module": "用户管理",
                        "url": "/admin/core-user/tbuser/updateUser",
                        "level": 2,
                        "isSelect": false,
                        "items": [

                        ]
                    },
                    {
                        "id": 20,
                        "application": "system-config-user-list",
                        "type": "RESOURCE_INNER_LINK",
                        "text": "用户删除",
                        "customId": "user-center-delete",
                        "icon": null,
                        "orderIndex": "4",
                        "module": "用户管理",
                        "url": "/admin/core-user/tbuser/delete",
                        "level": 2,
                        "isSelect": false,
                        "items": [

                        ]
                    },
                    {
                        "id": 21,
                        "application": "system-config-user-list",
                        "type": "RESOURCE_INNER_LINK",
                        "text": "用户启用禁用",
                        "customId": "user-center-valid",
                        "icon": null,
                        "orderIndex": "5",
                        "module": "用户管理",
                        "url": "/admin/core-user/tbuser/setUserValid",
                        "level": 2,
                        "isSelect": false,
                        "items": [

                        ]
                    },
                    {
                        "id": 22,
                        "application": "system-config-user-list",
                        "type": "RESOURCE_INNER_LINK",
                        "text": "用户重置密码",
                        "customId": "user-center-resetPassword",
                        "icon": null,
                        "orderIndex": "6",
                        "module": "用户管理",
                        "url": "/admin/core-user/tbuser/resetPassWord",
                        "level": 2,
                        "isSelect": false,
                        "items": [

                        ]
                    },
                    {
                        "id": 24,
                        "application": "system-config-user-list",
                        "type": "RESOURCE_INNER_LINK",
                        "text": "用户详情",
                        "customId": "user-center-detail",
                        "icon": null,
                        "orderIndex": "7",
                        "module": "用户管理",
                        "url": "/admin/core-user/tbuser/getUserAndRole",
                        "level": 2,
                        "isSelect": false,
                        "items": [

                        ]
                    }
                ]
            },
            {
                "id": 25,
                "application": "system-config",
                "type": "INNER_LINK",
                "text": "角色管理",
                "customId": "system-config-role-list",
                "icon": null,
                "orderIndex": "2",
                "module": "角色管理",
                "url": "/role",
                "level": 1,
                "isSelect": false,
                "items": [
                    {
                        "id": 26,
                        "application": "system-config-role-list",
                        "type": "RESOURCE_INNER_LINK",
                        "text": "角色列表",
                        "customId": "role-center-list",
                        "icon": null,
                        "orderIndex": "1",
                        "module": "角色管理",
                        "url": "/admin/core-user/role/getRoleList",
                        "level": 2,
                        "isSelect": false,
                        "items": [

                        ]
                    },
                    {
                        "id": 27,
                        "application": "system-config-role-list",
                        "type": "RESOURCE_INNER_LINK",
                        "text": "角色新增",
                        "customId": "role-center-save",
                        "icon": null,
                        "orderIndex": "2",
                        "module": "角色管理",
                        "url": "/admin/core-user/role/saveRole",
                        "level": 2,
                        "isSelect": false,
                        "items": [

                        ]
                    },
                    {
                        "id": 28,
                        "application": "system-config-role-list",
                        "type": "RESOURCE_INNER_LINK",
                        "text": "角色修改",
                        "customId": "role-center-update",
                        "icon": null,
                        "orderIndex": "3",
                        "module": "角色管理",
                        "url": "/admin/core-user/role/updateRole",
                        "level": 2,
                        "isSelect": false,
                        "items": [

                        ]
                    },
                    {
                        "id": 29,
                        "application": "system-config-role-list",
                        "type": "RESOURCE_INNER_LINK",
                        "text": "角色删除",
                        "customId": "role-center-delete",
                        "icon": null,
                        "orderIndex": "4",
                        "module": "角色管理",
                        "url": "/admin/core-user/role/delete",
                        "level": 2,
                        "isSelect": false,
                        "items": [

                        ]
                    },
                    {
                        "id": 30,
                        "application": "system-config-role-list",
                        "type": "RESOURCE_INNER_LINK",
                        "text": "角色详情",
                        "customId": "role-center-detail",
                        "icon": null,
                        "orderIndex": "5",
                        "module": "角色管理",
                        "url": "/admin/core-user/role/getRole",
                        "level": 2,
                        "isSelect": false,
                        "items": [

                        ]
                    },
                    {
                        "id": 44,
                        "application": "system-config-role-list",
                        "type": "RESOURCE_INNER_LINK",
                        "text": "角色权限树",
                        "customId": "role-center-authtree",
                        "icon": null,
                        "orderIndex": "6",
                        "module": "角色管理",
                        "url": "/admin/core-user/tbauth/getAuthTreeByRoleIds",
                        "level": 2,
                        "isSelect": false,
                        "items": [

                        ]
                    }
                ]
            },
            {
                "id": 31,
                "application": "system-config",
                "type": "INNER_LINK",
                "text": "操作日志",
                "customId": "system-config-log-list",
                "icon": null,
                "orderIndex": "3",
                "module": "操作日志管理",
                "url": "/log",
                "level": 1,
                "isSelect": false,
                "items": [
                    {
                        "id": 32,
                        "application": "system-config-log-list",
                        "type": "RESOURCE_INNER_LINK",
                        "text": "操作日志列表",
                        "customId": "operation-log-center-list",
                        "icon": null,
                        "orderIndex": "1",
                        "module": "操作日志管理",
                        "url": "/admin/core-user/log/search",
                        "level": 2,
                        "isSelect": false,
                        "items": [

                        ]
                    }
                ]
            },
            {
                "id": 33,
                "application": "system-config",
                "type": "INNER_LINK",
                "text": "api日志",
                "customId": "system-config-api-list",
                "icon": null,
                "orderIndex": "4",
                "module": "api日志管理",
                "url": "/api",
                "level": 1,
                "isSelect": false,
                "items": [
                    {
                        "id": 34,
                        "application": "system-config-api-list",
                        "type": "RESOURCE_INNER_LINK",
                        "text": "api日志列表",
                        "customId": "interface-log-center-list",
                        "icon": null,
                        "orderIndex": "1",
                        "module": "api日志管理",
                        "url": "/admin/core-user/tbinterfacelog/search",
                        "level": 2,
                        "isSelect": false,
                        "items": [

                        ]
                    },
                    {
                        "id": 35,
                        "application": "system-config-api-list",
                        "type": "RESOURCE_INNER_LINK",
                        "text": "api日志详情",
                        "customId": "interface-log-center-detail",
                        "icon": null,
                        "orderIndex": "2",
                        "module": "api日志管理",
                        "url": "/admin/core-user/tbinterfacelog/detail",
                        "level": 2,
                        "isSelect": false,
                        "items": [

                        ]
                    }
                ]
            }
        ]
    },
    {
        "id": 36,
        "application": "example",
        "type": "GROUP",
        "text": "渠道管理",
        "customId": "channel-center",
        "icon": "MailOutlined",
        "orderIndex": "2",
        "module": "渠道管理",
        "url": null,
        "level": 0,
        "isSelect": false,
        "items": [
            {
                "id": 37,
                "application": "channel-center",
                "type": "INNER_LINK",
                "text": "渠道管理列表",
                "customId": "channel-center-list",
                "icon": null,
                "orderIndex": "1",
                "module": "渠道管理",
                "url": "/admin/core-user/channel/search",
                "level": 1,
                "isSelect": false,
                "items": [
                    {
                        "id": 39,
                        "application": "channel-center-list",
                        "type": "RESOURCE_INNER_LINK",
                        "text": "渠道管理新增",
                        "customId": "channel-center-save",
                        "icon": null,
                        "orderIndex": "2",
                        "module": "渠道管理",
                        "url": "/admin/core-user/channel/save",
                        "level": 2,
                        "isSelect": false,
                        "items": [

                        ]
                    },
                    {
                        "id": 40,
                        "application": "channel-center-list",
                        "type": "RESOURCE_INNER_LINK",
                        "text": "渠道管理修改",
                        "customId": "channel-center-update",
                        "icon": null,
                        "orderIndex": "3",
                        "module": "渠道管理",
                        "url": "/admin/core-user/channel/modify",
                        "level": 2,
                        "isSelect": false,
                        "items": [

                        ]
                    },
                    {
                        "id": 41,
                        "application": "channel-center-list",
                        "type": "RESOURCE_INNER_LINK",
                        "text": "渠道管理删除",
                        "customId": "channel-center-delete",
                        "icon": null,
                        "orderIndex": "4",
                        "module": "渠道管理",
                        "url": "/admin/core-user/channel/deleteById",
                        "level": 2,
                        "isSelect": false,
                        "items": [

                        ]
                    },
                    {
                        "id": 43,
                        "application": "channel-center-list",
                        "type": "RESOURCE_INNER_LINK",
                        "text": "渠道管理详情",
                        "customId": "channel-center-detail",
                        "icon": null,
                        "orderIndex": "5",
                        "module": "渠道管理",
                        "url": "/admin/core-user/channel/detail",
                        "level": 2,
                        "isSelect": false,
                        "items": [

                        ]
                    }
                ]
            }
        ]
    },
    {
        "id": 1,
        "application": "example",
        "type": "GROUP",
        "text": "会员管理",
        "customId": "member-center",
        "icon": "SettingOutlined",
        "orderIndex": "3",
        "module": "会员管理模块",
        "url": "",
        "level": 0,
        "isSelect": false,
        "items": [
            {
                "id": 2,
                "application": "member-center",
                "type": "INNER_LINK",
                "text": "会员列表",
                "customId": "member-center-list",
                "icon": null,
                "orderIndex": "1",
                "module": "会员管理模块",
                "url": "/admin/tbmember/search",
                "level": 1,
                "isSelect": false,
                "items": [
                    {
                        "id": 4,
                        "application": "member-center-list",
                        "type": "RESOURCE_INNER_LINK",
                        "text": "查询会员",
                        "customId": "member-search",
                        "icon": null,
                        "orderIndex": "1",
                        "module": "会员管理模块",
                        "url": "/admin/tbmember/search",
                        "level": 2,
                        "isSelect": false,
                        "items": [

                        ]
                    },
                    {
                        "id": 5,
                        "application": "member-center-list",
                        "type": "RESOURCE_INNER_LINK",
                        "text": "导出会员",
                        "customId": "member-export",
                        "icon": null,
                        "orderIndex": "1",
                        "module": "会员管理模块",
                        "url": "/admin/tbmember/exportMember",
                        "level": 2,
                        "isSelect": false,
                        "items": [

                        ]
                    },
                    {
                        "id": 6,
                        "application": "member-center-list",
                        "type": "RESOURCE_INNER_LINK",
                        "text": "查看会员详情",
                        "customId": "member-search-detail",
                        "icon": null,
                        "orderIndex": "1",
                        "module": "会员管理模块",
                        "url": "/admin/tbmember/searchDetail",
                        "level": 2,
                        "isSelect": false,
                        "items": [

                        ]
                    },
                    {
                        "id": 7,
                        "application": "member-center-list",
                        "type": "RESOURCE_INNER_LINK",
                        "text": "会员实时看板",
                        "customId": "member-search-realTime",
                        "icon": null,
                        "orderIndex": "1",
                        "module": "会员管理模块",
                        "url": "/admin/tbmember/searchRealTimeMember",
                        "level": 2,
                        "isSelect": false,
                        "items": [

                        ]
                    }
                ]
            },
            {
                "id": 3,
                "application": "member-center",
                "type": "INNER_LINK",
                "text": "会员数据监控列表",
                "customId": "member-center-push-monitor",
                "icon": null,
                "orderIndex": "1",
                "module": "会员管理模块",
                "url": "/admin/tbpushmember/search",
                "level": 1,
                "isSelect": false,
                "items": [
                    {
                        "id": 8,
                        "application": "member-center-push-monitor",
                        "type": "RESOURCE_INNER_LINK",
                        "text": "会员列表异常查询",
                        "customId": "member-monitor-search",
                        "icon": null,
                        "orderIndex": "1",
                        "module": "会员管理模块",
                        "url": "/admin/tbpushmember/search",
                        "level": 2,
                        "isSelect": false,
                        "items": [

                        ]
                    },
                    {
                        "id": 9,
                        "application": "member-center-push-monitor",
                        "type": "RESOURCE_INNER_LINK",
                        "text": "会员监控查询",
                        "customId": "member-monitor-realTime",
                        "icon": null,
                        "orderIndex": "1",
                        "module": "会员管理模块",
                        "url": "/admin/tbpushmember/searchRealTimeMember",
                        "level": 2,
                        "isSelect": false,
                        "items": [

                        ]
                    },
                    {
                        "id": 15,
                        "application": "member-center-push-monitor",
                        "type": "RESOURCE_INNER_LINK",
                        "text": "会员监控查询",
                        "customId": "member-monitor-push",
                        "icon": null,
                        "orderIndex": "1",
                        "module": "会员管理模块",
                        "url": "/admin/tbpushmember/restPush",
                        "level": 2,
                        "isSelect": false,
                        "items": [

                        ]
                    }
                ]
            }
        ]
    }
]

export default menuList