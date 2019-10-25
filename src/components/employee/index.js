import React, {Component} from 'react';
import { Table } from 'antd';

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: true,
      width: '30%',
    },
    {
      title: 'Location',
      dataIndex: 'location',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'EmployeeID',
      dataIndex: 'employee_id',
    },
  ];

  const data = [
      {
          key: '1',
          name: "Santosh Ghode",
          location: "Mumbai",
          gender: "Male",
          employee_id: "10001",
          age: 24
      },
      {
          key: '1',
          name: "Ratan Singh",
          location: "Pune",
          gender: "Male",
          employee_id: "10001",
          age: 23
      },
      {
          key: '1',
          name: "Ratan Singh",
          location: "Pune",
          gender: "Male",
          employee_id: "10001",
          age: 23
      },
      {
          key: '1',
          name: "Ratan Singh",
          location: "Pune",
          gender: "Male",
          employee_id: "10001",
          age: 23
      },
  ]

class EmployeeIndex extends Component{
    constructor(){
        super()
        this.state = {
            data: [],
            pagination: {},
            loading: false,
          };
    }

    componentDidMount(){
        this.setState({data: data})
    }
    render(){
        return(
            <Table
                columns={columns}
                dataSource={this.state.data}
            />
        )
    }
}

export default EmployeeIndex