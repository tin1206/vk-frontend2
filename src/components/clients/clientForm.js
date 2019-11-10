import React, {Component} from 'react';
import { Row, Col } from 'antd';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Card } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {create_client} from '../../redux/actions/clientActions'
import {fetch_admin_list} from '../../redux/actions/adminActions'
const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 3 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };

const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 3,
      },
    },
  };

const handleSubmit = (e,props) => {
    e.preventDefault();
    console.log("handle Submit")
    props.form.validateFields((err, values) => {
      if (!err) {
          console.log(values)
        props.create_client(values, props.history)
      }
      else{
          
      }
    });
  };

  const dynamic_fields = [
    {
    name: "phone_number",
    type: "text",
    display_name: "Phone Number"
    },
    {
    name: "phone_number1",
    type: "text",
    display_name: "Phone Number1"
    },
    {
    name: "phone_number2",
    type: "text",
    display_name: "Phone Number2"
    },
]

  const dynamic_client_fields = (form) => {
    return (
        dynamic_fields.map((field, index) => 
          <Form.Item label={field.display_name}>
            {form.getFieldDecorator(`${field.name}`, {
                rules: [{ required: true, message: 'Please input client location' }],
            })(
            <Input/>,
            )}
          </Form.Item>
        )
    )
  }

function ClientForm(props){
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = props.form

    return(
        <div>
                <Row type="flex" justify="space-around" align="top" style={{minHeight: "100vh"}}>
                  <Col xs={23} sm={14} md={12}> 
                   <div>
                       <Card>
                        <Form onSubmit={(e) => handleSubmit(e,props)} className="login-form" {...formItemLayout}>
                            <Form.Item label="Name">
                            {getFieldDecorator('name', {
                                rules: [{ required: true, message: 'Please input name of Client.' }],
                            })(
                            <Input/>,
                            )}
                            </Form.Item>
                            <Form.Item label="Location">
                                {getFieldDecorator('location', {
                                    rules: [{ required: true, message: 'Please input client location' }],
                                })(
                                <Input/>,
                                )}
                            </Form.Item>
                            <Form.Item label="Priority">
                                {getFieldDecorator('priority', {
                                    rules: [{ required: true, message: 'Please input client priority' }],
                                })(
                                <Input/>,
                                )}
                            </Form.Item>
                            <Form.Item {...tailFormItemLayout}>
                                <Button type="primary" htmlType="submit">
                                    Create
                                </Button>
                            </Form.Item>
                        </Form>
                       </Card>
                   </div>
                 </Col>
                </Row>  

            </div>

    )
}

const mapDispatchToProps = dispatch => bindActionCreators({
  create_client: create_client
}, dispatch)


export default connect(null, mapDispatchToProps)(Form.create({name: 'client-form'})(ClientForm))