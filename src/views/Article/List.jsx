import React, {Component} from 'react';
import {Button, Table, Tag} from 'antd';
import {
    EditOutlined
} from '@ant-design/icons';

import {getArticle} from '../../Axios'

//标题重命名
const renameTitle = {
    id: 'id',
    title: '标题',
    author: '作者',
    creatAt: '创作时间',
    amount: '阅读量',
    ctime: '创作时间',
    desc: '文章内容'
}
//过滤不需要的显示内容
const filterTitle = {
    id: 'id',
    title: '标题',
    author: '作者',
    creatAt: '创作时间',
    amount: '阅读量',
    ctime: '创作时间'
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
            newColumns: [],
            offer:0,/*从第1页开始*/
            limit:10/*每页限制10条*/
        }

    }

    creatColumnsKeys = (columnsKeys) => {
        const column = columnsKeys.map(item => {
            //过滤掉文章详情
            if (filterTitle[item]) {
                return {
                    title: renameTitle[item],
                    dataIndex: item,
                    key: item
                }
            } else return {}
        })
        column.push({
            title: '操作',
            key: 'action',
            render: (text, record, index) => {
                return (<>
                        <Button type="primary" size='small' icon={<EditOutlined/>}>编辑</Button>
                        <Button type="primary" size='small' danger ghost>删除</Button>
                    </>
                )
            }
        })
        return column
    }

    getData = () => {
        getArticle().then((resp) => {
            const columnsKeys = Object.keys(resp.data.list[0]);
            //重新return需要的对象格式
            const newColumns = this.creatColumnsKeys(columnsKeys)
            this.setState({
                total: resp.data.total,
                dataSource: resp.data.list,
                newColumns,
                loadingFlag: false
            })
        }).catch(err => console.log(err))
    }

    componentDidMount() {
        this.getData()
    }

    render() {
        console.log(this.state)

        return (
            <div>
                <Table
                    rowKey={record => record.id}/*解决key报错问题*/
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
