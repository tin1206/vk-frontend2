import React, {Component} from 'react';
import { Table } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {fetch_employee_list} from '../../redux/actions/employeeActions'


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
    {
      title: 'Mobile',
      dataIndex: 'mobile_no',
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
      this.props.fetch_employee_list()
    }
    render(){
        return(
            <Table
                columns={columns}
                dataSource={this.props.employees.employees}
            />
        )
    }
}

const mapStateToProps = () => (state) => {
  return{
      employees: state.employees
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetch_employee_list: fetch_employee_list
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeIndex)