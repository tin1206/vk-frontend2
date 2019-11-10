import React, {Component} from 'react';
import { Table } from 'antd';
import {fetch_admin_list} from '../../redux/actions/adminActions'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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
        this.props.fetch_admin_list()
    }
    render(){
        return(
            <div>
                <Table
                columns={columns}
                dataSource={this.props.admins.admin}
                />
            </div>
        )
    }
}

const mapStateToProps = () => (state) => {
    return{
        admins: state.admins
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    fetch_admin_list: fetch_admin_list
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AdminIndex)