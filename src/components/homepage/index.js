import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import '../../stylesheets/homepage.css'
const { Header} = Layout;

function Homepage(){
    return(
       <div className = {'backgroundImage'}>
        <Header style={{backgroundColor: 'inherit'}}>
            <Menu
                theme="dark"
                mode="horizontal"
                style={{  backgroundColor: 'inherit', border: '0px', color: '#ffffff' }}
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