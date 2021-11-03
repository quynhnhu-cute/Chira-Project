import React, { useEffect } from 'react';
import { Route, Redirect, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store/store';
import { Layout, Menu, Breadcrumb, Row, Col, Button } from 'antd';
import { UserOutlined, ProjectOutlined } from '@ant-design/icons';
import './UserTemplate.scss';
import { NavBar } from 'components/navbar/NavBar';
import { actTestToken } from 'pages/Auth/module/actions';

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

const UserTemplate = (props: any) => {
    let { component: Component, ...restRoute } = props;
    const currentUser = useSelector((state: RootState) => state.authReducer.currentUser);
    const dispatch = useDispatch();
    // useEffect(() => {
    //     console.log(currentUser.accessToken)
    //     dispatch(actTestToken(currentUser.accessToken, 'abc'));
    // }, [])
    const content = (
        <Route {...restRoute} render={(routeProps) => (
            <Layout>
                <NavBar />
                <Layout>
                    <Sider className="site-layout-background sider-responsive">
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            <SubMenu key="sub1" icon={<ProjectOutlined translate={undefined} />} title="Projects">
                                <Menu.Item key="1">Project List</Menu.Item>
                                <Menu.Item key="2">Create Project</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" icon={<UserOutlined translate={undefined} />} title="Users">
                                <Menu.Item key="3">option3</Menu.Item>
                                <Menu.Item key="4">option4</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 400,
                            }}
                        >
                            <Component {...routeProps} />
                        </Content>
                    </Layout>
                </Layout>

            </Layout>
        )} />
    );
    return currentUser ? content : <Redirect to='/login' />;
}

export default UserTemplate;
