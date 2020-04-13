import React, {Component} from 'react';
import {Table, Tag} from 'antd';
import {getArticle} from '../../Axios'


const data = [];

class List extends Component {
    constructor() {
        super();
        this.state = {
            columns: [
                {
                    title: 'Id',
                    dataIndex: 'id',
                    key: 'id'
                },
                {
                    title: 'Title',
                    dataIndex: 'title',
                    key: 'title'
                }
            ],
            data: [{
                key: '1',
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park',
                tags: ['nice', 'developer'],
            },
                {
                    key: '2',
                    name: 'Jim Green',
                    age: 42,
                    address: 'London No. 1 Lake Park',
                    tags: ['loser'],
                },
                {
                    key: '3',
                    name: 'Joe Black',
                    age: 32,
                    address: 'Sidney No. 1 Lake Park',
                    tags: ['cool', 'teacher'],
                }],
            total: 0,
            pageSize:5,
            loadingFlag: true
        }

    }


    componentDidMount() {
        getArticle().then((resp) => {
            console.log(resp)

            this.setState({total: resp.data.total,data: resp.data.list,loadingFlag :false})

        })
    }

    render() {
        return (
            <div>
                <Table
                    columns={this.state.columns}
                    dataSource={this.state.data}
                    loading={this.state.loadingFlag}
                    pagination={{
                        total: this.state.total
                    }}
                />
            </div>
        );
    }
}

export default List;
