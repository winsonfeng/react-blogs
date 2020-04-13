import React from "react";
import {render} from "react-dom";
import App from "./App";
import {mainRouter} from './router'
import {HashRouter as Router, Redirect, Route, Switch} from "react-router-dom";
//antd国际化
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd';

render(
    <Router>
        <Switch>
            <Route path="/admin" render={(routerProps) => {
                return <ConfigProvider locale={zhCN}><App {...routerProps} exact/></ConfigProvider>
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
