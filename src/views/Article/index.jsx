import React, {Component} from 'react';
import {Link, Route} from "react-router-dom";
import ArticleDetail from "./ArticleDetail";
import {Card} from "antd";


class Index extends Component {
    render() {
        return (
            <div>
gfgfg
                <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>

            </div>
        );
    }
}

export default Index;
