import React, {Component} from 'react';
import {Button} from 'antd'
import './css/index.less'
import Hoc from './Hoc'


@Hoc
class App extends Component {
    render() {
        return (
            <div className="App">
                测试版本v1.1
            </div>
        );
    }
}
export default App;
