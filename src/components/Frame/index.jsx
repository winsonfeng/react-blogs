import React, {Component} from 'react';
import {Layout, Menu} from 'antd';
import {DashboardOutlined,ProjectOutlined } from '@ant-design/icons';
import logo from './logo-512.png'
import './frame.less'
import {adminRouter} from '../../router'
import {Link} from "react-router-dom";

const {Header, Content, Footer, Sider,Icon} = Layout;


class Frame extends Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        console.log(this.props.children)
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
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        {adminRouter.map(childComponent => {
                            return <Menu.Item key={childComponent.pathname}>
                                <ProjectOutlined />
                                <Link className="nav-text" to={childComponent.pathname}>{childComponent.title}</Link>
                            </Menu.Item>
                        })}
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
