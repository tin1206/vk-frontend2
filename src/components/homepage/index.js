import React, {Component} from 'react';
import { Row, Col } from 'antd';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import bg from '../../images/bg.jpg'
import '../../stylesheets/homepage.css'
const { Header} = Layout;

function Homepage(){
    return(
       <div className = {'backgroundImage'}>
        <Header>
            <Menu
                theme="dark"
                mode="horizontal"
                style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="1">
                  <Link to ='/signin'>
                    Admin Login
                  </Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to = '/clients/signin'>
                    Client Login
                  </Link>
                </Menu.Item>
                {/* <Menu.Item key="3">nav 3</Menu.Item> */}
            </Menu>
        </Header>
        </div>

    )   
}

export default Homepage