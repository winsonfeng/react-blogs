import React, {Component} from 'react';
import './css/index.less'
// import Hoc from './Hoc'
import {adminRouter} from './router'
import {Route, Switch, Redirect} from 'react-router-dom'
import {Frame} from "./components";

// @Hoc
class App extends Component {
    //定义递归方法
    renderRoute = (router) => {
        let container ;
        return router.map(route => {
            container = null
            if (route.children){
                return this.renderRoute(route.children)
            }
            else container = <Route
                key={route.pathname}
                path={route.pathname}
                render={(routerProps) => {
                    return <route.component {...routerProps} />
                }}
            />
            return container
        })
    }

    render() {
        return (
            <Frame>
                <Switch>
                    {/*动态渲染Route*/}
                    {this.renderRoute(adminRouter)}
                    <Redirect to={adminRouter[0].pathname} from="/admin" exact/>
                    <Redirect to="/404"/>
                </Switch>
            </Frame>
        );
    }
}

export default App;
