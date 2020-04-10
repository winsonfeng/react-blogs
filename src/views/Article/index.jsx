import React, {Component} from 'react';
import {HashRouter as Router, Link, Switch, Route} from "react-router-dom";
import ArticleDetail from "./ArticleDetail";


class Index extends Component {
    render() {
        return (
            <div>
                <Link to="/article/1?from=article">文章一</Link>
                <Link to={{
                    pathname:'/article/2',
                    state:{
                        from:'article'
                    }
                }}>文章二</Link>
            </div>
        );
    }
}

export default Index;
