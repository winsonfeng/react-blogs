import {
    Dashboard,
    Article,
    Login,
    NotFound,
    ArticleEdit,
    ArticleList
}from '../views'


export const mainRouter =[{
    pathname:'/login',
    component:Login
},{
    pathname: '/404',
    component: NotFound
}]


export const adminRouter =[{
    pathname:'/admin/dashboard',
    component:Dashboard,
},{
    pathname:'/admin/Article',
    component:Article
},{
    pathname:'/admin/ArticleEdit',
    component:ArticleEdit
},{
    pathname:'/admin/ArticleList',
    component:ArticleList
}]


