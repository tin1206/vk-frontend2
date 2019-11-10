import React, {Component} from 'react';
import { Row, Col } from 'antd';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header} = Layout;

function Homepage(){
    return(
        <Header>
            <Menu
                theme="dark"
                mode="horizontal"
                style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="1">
                  <Link to ='/signin'>
                    Admin
                  </Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to = '/clients/signin'>
                    Clients
                  </Link>
                </Menu.Item>
                {/* <Menu.Item key="3">nav 3</Menu.Item> */}
            </Menu>
        </Header>

    )   
}

export default Homepage