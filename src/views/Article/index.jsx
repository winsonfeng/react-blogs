import React, {Component} from 'react';
import {Link, Route} from "react-router-dom";
import ArticleDetail from "./ArticleDetail";


class Index extends Component {
    render() {
        return (
            <div>
                <Link to="/admin/article/1?from=article">文章一</Link>
                <Link to={{
                    pathname:'/admin/article/2',
                    state:{
                        from:'article'
                    }
                }}>文章二</Link>
                <Route path="/admin/article/:id" component={ArticleDetail} />
            </div>
        );
    }
}

export default Index;
