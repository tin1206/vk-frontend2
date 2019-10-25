import React, {Component} from 'react';
import { Table } from 'antd';

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: true,
      width: '20%',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
  ];

  const data = [
      {
          key: '1',
          name: "Santosh Ghode",
          email: "ghodesantosh0@gmail.com"
      },
      {
          key: '1',
          name: "Ratan Singh",
          email: "ratansingh648@gmail.com"
      },
      {
          key: '1',
          name: "Ratan Singh",
          email: "ratansingh648@gmail.com"
      },
      {
          key: '1',
          name: "Ratan Singh",
          email: "ratansingh648@gmail.com"
      },
  ]

class AdminIndex extends Component{
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

export default AdminIndex