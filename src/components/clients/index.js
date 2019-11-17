import React, {Component} from 'react';
import { Table } from 'antd';
import { connect } from 'react-redux';
import {fetch_client_list} from '../../redux/actions/clientActions'
import { bindActionCreators } from 'redux';



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
      title: 'Priority',
      dataIndex: 'priority',
    },
    {
      title: 'Token',
      dataIndex: 'client_id'
    }
  ];

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
        this.props.fetch_client_list(this.props.history)
    }
    render(){
        return(
            <div>
               <Table
                columns={columns}
                dataSource={this.props.clients.clients}
                 />
            </div>
        )
    }
}

const mapStateToProps = () => (state) => {
    return{
        clients: state.clients
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    fetch_client_list: fetch_client_list
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ClientIndex)