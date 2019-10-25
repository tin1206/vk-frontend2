import React, {Component} from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import AdminIndex from '../components/admin'
import {auth_routes} from '../routes'


const {Content, Footer} = Layout;

class MainContainer extends Component {

    render(){
        return(
            <Layout style={{ minHeight: '100vh' }}>
                <Sidebar />
                <Layout>
                    <Content style={{ margin: '0 16px' }}>
                        <Navbar />
                    <div style={{ padding: 24, background: '#fff', minHeight: '90vh' }}>
                        {auth_routes()}
                    </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Created By Madara</Footer>
                </Layout>
            </Layout>
        )
    }

}

export default MainContainer