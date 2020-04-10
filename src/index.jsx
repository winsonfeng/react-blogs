import React from "react";
import {render} from "react-dom";
import App from "./App";
import {mainRouter} from './router'
import {HashRouter as Router, Route, Switch, Redirect, Link,useParams,useRouteMatch} from "react-router-dom";
import {Article, Dashboard, NotFound} from "./views";
import {Button} from "antd";
import ArticleDetail from "./views/Article/ArticleDetail";

function Children (){
    let {id} = useParams()
    console.log(useParams())
    console.log(useRouteMatch())
    return <div>
        id:{id}
    </div>
}

render(
    <Router>
        <ul>
            <li><Link to="/admin">首页</Link></li>
            <li><Link to="/404">404</Link></li>
            <li><Link to="/admin/dashboard">仪表盘</Link></li>
            <li><Link to="/article">文章页</Link></li>

        </ul>
        <Switch>
            <Route path="/admin" render={(routerProps) => {
                return <App {...routerProps}/>
            }}/>

            {/*{
                mainRouter.map(router => {
                    return <Route key={router.pathname} path={router.pathname} component={router.component}/>
                })
            }*/}
            <Route component={Dashboard} path="/admin/dashboard" exact/>
            <Route component={NotFound} path="/404"/>
            <Route component={Article} path="/article" exact/>
            <Route component={ArticleDetail} path="/article/:id"/>
            <Redirect to="/admin" from="/" exact/>
            <Redirect to="/404"/>
        </Switch>
    </Router>
    ,
    document.querySelector('#root')
)
