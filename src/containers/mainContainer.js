import React, {Component} from 'react';
import { Layout } from 'antd';
import Sidebar from "../components/sidebar";
import {auth_routes} from '../routes'


const {Content, Footer} = Layout;

class MainContainer extends Component {

    render(){
        return(
            <Layout style={{ minHeight: '100vh' }}>
                <Sidebar />
                <Layout>
                    <Content style={{ margin: '0 16px' }}>
                        {/* <Navbar /> */}
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