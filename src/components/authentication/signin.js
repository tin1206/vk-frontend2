import { Row, Col } from 'antd';
import React, {Component} from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Card } from 'antd';
import { Alert } from 'antd';
import { Spin } from 'antd';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from "react-router-dom";

import "../../stylesheets/signin.css";
import '../../stylesheets/homepage.css';

import {sign_in} from '../../redux/actions/signinActions';

class Signin extends Component{

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            this.props.sign_in(values, this.props.history)
          }
          else{
              
          }
        });
      };

    render(){
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form
        const isAutheticated = this.props.sign_in_state.isAutheticated
        return(
            <div className = {'backgroundImage'}>
            {isAutheticated ? <Redirect to='/' /> 
            :
            
                <Row type="flex" justify="space-around" align="middle" style={{minHeight: "100vh"}}>
                  <Col xs={23} sm={6} md={6}> 
                   <div>
                       <Card>
                        { this.props.sign_in_state.error_message &&
                        <Alert message="Invalid email or password" type="error" />
                         }
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item>
                            {getFieldDecorator('email', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                            <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Email"
                            type="email"
                            />,
                            )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: 'Please input your Password!' }],
                                })(
                                <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                                />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                <Checkbox>Remember me</Checkbox>
                                <a className="login-form-forgot" href="">
                                {/* Forgot password */}
                                </a>
                                <Button type="primary" 
                                        htmlType="submit" 
                                        className="login-form-button"
                                        loading={this.props.sign_in_state.iconLoading}
                                      >
                                    Log in
                                </Button>
                                    {/* Or <a href="">register now!</a> */}
                            </Form.Item>
                        </Form>
                       </Card>
                   </div>
                 </Col>
                </Row>
         }
         </div>
        )

    }
}
const mapDispatchToProps = dispatch => bindActionCreators({
    sign_in: sign_in
}, dispatch)

const mapStateToProps = () => (state) => {
    return {
        sign_in_state: state.auth
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create({name: 'login-form'})(Signin))