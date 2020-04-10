import React, {Component} from 'react';
import './css/index.less'
// import Hoc from './Hoc'
import {adminRouter} from './router'
import {Route, Switch,Redirect} from 'react-router-dom'

// @Hoc
class App extends Component {

    render() {
        return (
            <div className="App">
                测试版本v1.1
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
                    <Redirect to="/404" />
                </Switch>
            </div>
        );
    }
}

export default App;
