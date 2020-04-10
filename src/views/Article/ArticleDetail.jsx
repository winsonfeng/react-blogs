import React, {Component} from 'react';


class ArticleDetail extends Component {
    render() {
        return (
            <div>
                文章详情 这是第{this.props.match.params.id}篇
            </div>
        );
    }
}

export default ArticleDetail;
