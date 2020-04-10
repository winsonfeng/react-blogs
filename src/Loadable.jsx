import React, {Component} from 'react';

let timer;

const Loadable = ({loader, loading: Loading}) => {
    return class LoadableComponent extends Component {
        state = {
            LoadedComponent: null
        }
        componentDidMount() {
            loader.then(resq => {
                timer = setTimeout(() => {
                    this.setState({LoadedComponent: resq.default})
                }, 200)

            })
        }
         componentWillUnmount() {
            clearTimeout(timer)
         }

        render() {
            const LoadedComponent = this.state.LoadedComponent
            return LoadedComponent ? <LoadedComponent/> : <Loading/>
        }
    }
}
export default Loadable;
