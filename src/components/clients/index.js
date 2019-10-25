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
  ];

  const data = [
      {
          key: '1',
          name: "Santosh Ghode",
          location: "Mumbai",
      },
      {
          key: '1',
          name: "Ratan Singh",
          location: "Pune",
      },
      {
          key: '1',
          name: "Ratan Singh",
          location: "Pune",
      },
      {
          key: '1',
          name: "Ratan Singh",
          location: "Pune",
      },
  ]

class ClientIndex extends Component{
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

export default ClientIndex