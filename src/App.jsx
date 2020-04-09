import React, {Component} from 'react';
import {Button} from 'antd'
import './css/index.less'
import Hoc from './Hoc'


@Hoc
class App extends Component {
    render() {
        return (
            <div className="App">
                hello world this is App
            </div>
        );
    }
}
export default App;
