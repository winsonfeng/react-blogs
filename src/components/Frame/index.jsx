import React, {Component} from 'react';
import {Layout, Menu} from 'antd';
import Icon, {DashboardOutlined, ProjectOutlined} from '@ant-design/icons';
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
                        <Icon component={childComponent.icon}/>
                        {childComponent.title}
                    </span>
                } key={childComponent.pathname}>
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
        // console.log(this)
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
                        <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                            {this.props.children}
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>©2020 Created by Winson</Footer>
                </Layout>
            </Layout>
        );
    }
}

export default Frame;
