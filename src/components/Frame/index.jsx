import React, {Component} from 'react';
import {Button, Card, Layout, Menu} from 'antd';
import Icon from '@ant-design/icons';
import logo from './logo-512.png'
import './frame.less'
import {adminRouter} from '../../router'
import {Link, withRouter} from "react-router-dom";

const {SubMenu} = Menu;


const {Header, Content, Footer, Sider} = Layout;

@withRouter
class Frame extends Component {
    state = {
        collapsed: false,
        routePath: []
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };


    renderMenu = (data) => {
        let container = null
        return data.map(childComponent => {
            //如果存在二级菜单
            if (childComponent.children) {
                container = <SubMenu title={
                    <span>
                        {/*二级菜单icon写法*/}
                        <Icon component={childComponent.icon}/>
                        {childComponent.title}
                    </span>
                } key={childComponent.pathname}>
                    {/*递归调用*/}
                    {this.renderMenu(childComponent.children)}
                </SubMenu>
            } else container = <Menu.Item key={childComponent.pathname}>
                <Icon component={childComponent.icon}/>
                <Link className="nav-text" to={childComponent.pathname}>{childComponent.title}</Link>
            </Menu.Item>
            return container
        })
    }

    render() {
        // console.log(this.props.children)
        return (
            <Layout>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={broken => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                >
                    <div className="logoName">
                        <img src={logo} alt="sam"/>
                    </div>
                    <Menu
                        theme="dark"
                        mode="inline"
                        selectedKeys={this.props.location.pathname}
                        onClick={({item, key, keyPath, domEvent}) => {
                        }}
                    >
                        {/*动态生成导航*/}
                        {this.renderMenu(adminRouter)}
                    </Menu>
                </Sider>
                <Layout>
                    <Header className="site-layout-sub-header-background" style={{padding: 0}}/>
                    <Content style={{margin: '24px 16px 0'}}>
                        <div className="site-layout-background" style={{minHeight: 360}}>
                            <Card title='标题' style={{border: 0}} extra={<Button>More</Button>}>
                                {this.props.children}
                            </Card>

                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>©2020 Created by Winson</Footer>
                </Layout>
            </Layout>
        );
    }
}

export default Frame;
