import React from "react";
import {
    Dashboard,
    Article,
    Login,
    NotFound,
    ArticleEdit,
    ArticleList
} from '../views'

import {DashboardOutlined, ProjectOutlined} from '@ant-design/icons';

export const mainRouter = [{
    pathname: '/login',
    component: Login
}, {
    pathname: '/404',
    component: NotFound
}]


export const adminRouter = [{
    pathname: '/admin/dashboard',
    component: Dashboard,
    title: '仪表盘',
    isNav: true,
    icon: () => <DashboardOutlined/>
}, {
    pathname: '/admin/Article',
    component: Article,
    title: '文章管理',
    exact: true,
    icon: () => <ProjectOutlined/>,
    children: [{
        pathname: '/admin/Article/ArticleEdit',
        component: ArticleEdit,
        title: '文章编辑',
        icon: () => <DashboardOutlined/>
    }, {
        pathname: '/admin/Article/ArticleList',
        component: ArticleList,
        title: '文章列表',
        icon: () => <ProjectOutlined/>
    }]
}]


