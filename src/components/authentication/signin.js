import { Row, Col } from 'antd';
import React, {Component} from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Card } from 'antd';

import "../../stylesheets/signin.css"

class Signin extends Component{

    handleSubmit = e => {
        e.preventDefault();
        localStorage.setItem('token', "12345")
        window.location.reload()
        // this.props.form.validateFields((err, values) => {
        //   if (!err) {
        //     console.log('Received values of form: ', values);
        //   }
        // });
      };

    render(){
        return(
            <div>
                <Row type="flex" justify="space-around" align="middle" style={{minHeight: "100vh"}}>
                  <Col xs={23} sm={4}> 
                   <div>
                       <Card>
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item>
                                <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Checkbox>Remember me</Checkbox>
                                <a className="login-form-forgot" href="">
                                Forgot password
                                </a>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Log in
                                </Button>
                                    Or <a href="">register now!</a>
                            </Form.Item>
                        </Form>
                       </Card>
                   </div>
                 </Col>
                </Row>

            </div>

        )

    }
}

export default Signin