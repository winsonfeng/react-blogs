import React, {Component} from 'react';
import {Button} from "antd";
import {useParams} from 'react-router-dom'

class ArticleDetail extends Component {
    constructor() {
        super();
    }



render()
{

    return (
        <div>
            文章详情 这是第{this.props.match.params.id}篇
        </div>
    );
}
}

export default ArticleDetail;
