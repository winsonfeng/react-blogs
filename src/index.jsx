import React from "react";
import {render} from "react-dom";
import App from "./App";
import {mainRouter} from './router'
import {HashRouter as Router, Route, Switch , Redirect} from "react-router-dom";
import {NotFound} from "./views";


render(
    <Router>
        <Switch>
            <Route path="/admin" render={(routerProps)=>{
                return <App { ...routerProps}/>
            }} />

            {
                mainRouter.map( router=>{
                    return <Route key={router.pathname} path={router.pathname} component={router.component}/>
                })

            }

            <Redirect to="/admin" from="/" exact/>
            <Redirect to="/404" />
        </Switch>
    </Router>,
    document.querySelector('#root')
)
