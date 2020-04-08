import React, {Component} from 'react';
import Hoc from './Hoc'
class MyButton extends Component {
    render() {
        return (
            <div>
                {this.props.name}
            </div>
        );
    }
}

export default Hoc(MyButton);
