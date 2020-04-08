import React, {Component} from "react";

const withCopyRight = (MyComponent) => {
   return  class withCopyRight extends Component {
        render() {

            return (
                <>
                    <MyComponent {...this.props}/>
                    <div>&copy;sam</div>
                </>
            )
        }
    }
}
export default withCopyRight;
