import React, {Component} from 'react';
import {Button} from 'antd'
import './css/index.less'
import Hoc from './Hoc'


@Hoc
class App extends Component {
    render() {
        return (
            <div className="App">
                这是线上版本1.0
            </div>
        );
    }
}
export default App;
