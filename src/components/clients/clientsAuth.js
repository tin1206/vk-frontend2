import React, {Component} from 'react';
import { Row, Col } from 'antd';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Card } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { auth_client } from '../../redux/actions/clientActions';

class ClientAuth extends Component {

    handleSubmit = (e,props) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if(!err){
                console.log(values)
                props.auth_client(values, props.history)
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
                                <Form onSubmit={(e) => this.handleSubmit(e, this.props)} className="client-login-form">
                                <Form.Item>
                                {getFieldDecorator('client_token', {
                                    rules: [{ required: true, message: 'Please input your token!' }],
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

const mapDispatchToProps = dispatch => bindActionCreators({
    auth_client: auth_client
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Form.create({ name: "client-login"})(ClientAuth))