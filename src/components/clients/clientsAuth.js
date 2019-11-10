import React, {Component} from 'react';
import { Row, Col } from 'antd';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Card } from 'antd';
    import { connect } from 'react-redux';

class ClientAuth extends Component {

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if(!err){
                console.log(values)
            }else{

            }
        }
        )
    }

    componentDidMount(){
            window.navigator.vibrate(1000)
    }


    render(){
            console.log(this.props)
        const { getFieldDecorator } = this.props.form;
        return(
            <div>
                <Row type="flex" justify="space-around" align="middle" style={{minHeight: "100vh"}}> 
                    <Col xs = {22} md={6}>
                        <Card>
                                <Form onSubmit={() => this.handleSubmit(this.props)} className="client-login-form">
                                <Form.Item>
                                {getFieldDecorator('client_token', {
                                    rules: [{ required: true, message: 'Please input your username!' }],
                                })(
                                    <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="enter your token"
                                    />,
                                )}
                                </Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button   ">
                                   Start
                                </Button>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = () => (state) => {
    return {
            client: state.clients
    }
}
                                                                                            export default connect(mapStateToProps, null)(Form.create({ name: "client-login"})(ClientAuth))