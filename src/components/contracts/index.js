import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'antd';

const columns = [
    {
      title: 'Client',
      dataIndex: 'name',
      sorter: true,
      width: '30%',
    },
    {
      title: 'Total Employee',
      dataIndex: 'total_employee',
    },

    {
        title: "Edit",
        dataIndex: "",
        render: () => <Link to = '/contracts/edit'>Edit</Link>,
    }
  ];

  const data = [
      {
          key: '1',
          name: "Santosh Ghode",
          total_employee: "10",
      },
      {
          key: '2',
          name: "Ratan Singh",
          total_employee: "10",
      },
  ]

class ContractIndex extends Component{
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

export default ContractIndex