import React from "react";
import {render} from "react-dom";
import App from "./App";
import {mainRouter} from './router'
import {HashRouter as Router, Link, Redirect, Route, Switch} from "react-router-dom";

render(
    <Router>
        <ul>
            <li><Link to="/admin">首页</Link></li>
            <li><Link to="/404">404</Link></li>
            <li><Link to="/admin/dashboard">仪表盘</Link></li>
            <li><Link to="/admin/article">文章页</Link></li>

        </ul>
        <Switch>
            <Route path="/admin" render={(routerProps) => {
                return <App {...routerProps} exact/>
            }}/>
            {
                mainRouter.map(router => {
                    return <Route
                        key={router.pathname}
                        path={router.pathname}
                        component={router.component} />
                })
            }
            {/*<Route component={Dashboard} path="/admin/dashboard" exact/>
            <Route component={NotFound} path="/404"/>
            <Route component={Article} path="/article" exact/>
            <Route component={ArticleDetail} path="/article/:id"/>*/}
            <Redirect to="/admin" from="/" exact/>
            <Redirect to="/404"/>
        </Switch>
    </Router>
    ,
    document.querySelector('#root')
)
