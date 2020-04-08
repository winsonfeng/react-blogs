import React, {Component} from 'react';
import {Button} from 'antd'
import './css/index.less'
import Hoc from './Hoc'
import MyButton from "./MyButton";

class App extends Component {
    render() {
        return (
            <div className="App">
                <MyButton name={'click'}/>
                <Button type="primary">666</Button>
            </div>
        );
    }
}

export default Hoc(App);
