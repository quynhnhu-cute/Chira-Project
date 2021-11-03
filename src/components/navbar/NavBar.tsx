import React from 'react';
import { Layout, Menu, Row, Col, Button } from 'antd';
import { LaptopOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';
import { actLogout } from 'pages/Auth/module/actions';
import { useDispatch } from 'react-redux';

export const NavBar: React.FC = () => {
    const { Header } = Layout;
    const dispatch = useDispatch();
    return (
        <React.Fragment>
            <Header className="header">
                <span className="logo" >
                    {/* <img src="https://tse1.mm.bing.net/th?id=OIP.u4hvcZIdXsDWKNCCqb4inwHaE8&pid=Api&rs=1&c=1&qlt=95&w=168&h=112" alt="Logo"  width="50px"/> */}
                    {/* <p>ABC</p> */}
                </span>
                <Row>
                    <Col flex={4}>
                        <Menu theme="dark" mode="horizontal">
                            <Menu.Item key="1">
                                <NavLink to="/" />
                                Home
                            </Menu.Item>
                            <Menu.Item key="2">
                                <NavLink to="/" />
                                Create Project
                            </Menu.Item>
                            <Menu.Item key="3">
                                <NavLink to="/users" />
                                Users
                            </Menu.Item>
                            <Menu.Item key="4">
                                <NavLink to="/support" />
                                Support
                            </Menu.Item>
                            <Menu.Item key="5">
                                <NavLink to="/contact" />
                                Contacts
                            </Menu.Item>
                        </Menu>
                    </Col>
                    <Col flex={1}>
                        <Button type="dashed" icon={<LaptopOutlined translate={undefined} />} style={{ paddingBottom: "1.2px" }}></Button>
                        {' '}
                        <Button type="default" onClick={() => dispatch(actLogout())}>Log out</Button>
                    </Col>
                </Row>
            </Header>
        </React.Fragment>
    );

}

