import React, {Component} from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import SignOut from '../components/authentication/signout'

import "../stylesheets/sidebar.css"

const { SubMenu } = Menu;
const { Sider } = Layout;


class Sidebar extends Component {
    constructor(){
        super()
        this.state = {collapsed: false}
      }

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
      };
    
    render(){
        return(
            <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="2">
          <Link to = '/'>
            <Icon type="desktop" />
            <span>Dashboard</span>
          </Link>
          </Menu.Item>
          <Menu.Item key="6">
          <Link to = '/clients'>
          <Icon type="desktop" />
            <span>Clients</span>
            </Link>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="user" />
                <span>Users</span>
              </span>
            }
          >
            <Menu.Item key="3">
              <Link to = '/admins'>
              Admin 
              </Link>
              </Menu.Item>
            <Menu.Item key="4">
            <Link to = '/employees'>
              Employees
            </Link>
              </Menu.Item>
          </SubMenu>
          <Menu.Item key="5">
            <Link to = '/contracts'>
              <Icon type="border-left" />
               <span>Contracts</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="7">
            <Link to = '/attendance'>
              <Icon type="border-left" />
               <span>Attendance</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="8">
            <Link to = '/scanner'>
              <Icon type="border-left" />
               <span>Scanner</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="9">
            <Icon type="logout" />
            <SignOut />
          </Menu.Item>
        </Menu>
      </Sider>
        )
    }
}

export default Sidebar