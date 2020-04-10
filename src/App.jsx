import React, {Component} from 'react';
import './css/index.less'
// import Hoc from './Hoc'
import {adminRouter} from './router'
import {Route, Switch, Redirect} from 'react-router-dom'
import {Frame} from "./components";

// @Hoc
class App extends Component {

    render() {
        return (
            <Frame>
                <Switch>
                    {adminRouter.map(route => {
                        return <Route
                            key={route.pathname}
                            path={route.pathname}
                            render={(routerProps) => {
                                return <route.component {...routerProps}/>
                            }
                            }
                        />
                    })}
                    <Redirect to={adminRouter[0].pathname} from="/admin" exact/>
                    <Redirect to="/404"/>
                </Switch>
            </Frame>
        );
    }
}

export default App;
