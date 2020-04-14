import React, {Component} from 'react';
import {Table, Tag} from 'antd';
import {getArticle} from '../../Axios'

//标题重命名
const renameTitle = {
    id:'id',
    title: '标题',
    author: '作者',
    creatAt: '创作时间',
    amount: '阅读量'
}

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
            dataSource: [],
            total: 0,
            pageSize: 5,
            loadingFlag: true,
            newColumns: []
        }

    }

    creatColumnsKeys = (columnsKeys) => {
        return columnsKeys.map(item => {
            return {
                title: renameTitle[item],
                dataIndex: item,
                key: item
            }
        })
    }

    getData = () => {
        getArticle().then((resp) => {
            const columnsKeys = Object.keys(resp.data.list[0]);
            const newColumns = this.creatColumnsKeys(columnsKeys)
            this.setState({
                total: resp.data.total,
                dataSource: resp.data.list,
                newColumns,
                loadingFlag: false
            })

        })
    }

    componentDidMount() {
        this.getData()
    }

    render() {
        console.log(this.state)

        return (
            <div>
                <Table
                    rowKey = { record => record.id}/*解决key报错问题*/
                    columns={this.state.newColumns}
                    dataSource={this.state.dataSource}
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
