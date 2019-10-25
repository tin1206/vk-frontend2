import React, {Component} from 'react';
import { Table } from 'antd';
import { Select } from 'antd';
import { Row, Col } from 'antd';

const { Option } = Select;

const client_filter = () => {
    return(
        <div>
        <Select defaultValue="Client4" style={{ width: 120 }}>
          <Option value="Client1">Client1</Option>
          <Option value="Client2">Client2</Option>
          <Option value="Client3">Client3</Option>
        </Select>
      </div>
    )

}

const months_filter = () => {
    return(
        <div>
        <Select defaultValue="Jan" style={{ width: 120 }}>
          <Option value="jan">Jan</Option>
          <Option value="feb">Feb</Option>
          <Option value="mar">Mar</Option>
          <Option value="apr">Apr</Option>
          <Option value="may">May</Option>
        </Select>
      </div>
    )

}
  


export default function ClientView(){
    const columns = [
        {
          title: 'Employee',
          width: 100,
          dataIndex: 'name',
          key: 'name',
          fixed: 'left',
        },
        
      ];
    for(let i=0; i< 20; i++){
        columns.push({title: `Day ${i}`, dataIndex: `day ${i}`, key: `day ${i}`})
    }
    const data = []
    for(let i=0; i< 10; i++){
        let d = {}
       d['key'] = i
       d['name'] = `Employee ${i}`
      for(let  j=0; j< 20 ; j++){
        d[`day ${j}`] = "9:00 - 7:00"
      }
      data.push(d)
    }
    console.log(columns)
    console.log(data)
    return(
        <div>
            <Row>
                <Col sm={4}>
                  Select Client
                  {client_filter()}
                </Col>
                <Col sm={4}>
                  Select Month
                  {months_filter()}
                </Col>
            </Row>
            <Table columns={columns} dataSource={data} scroll={{ x: 2000}} />
        </div>
    )
}