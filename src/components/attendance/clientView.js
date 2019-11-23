import React, {Component} from 'react';
import { Table } from 'antd';
import { Select } from 'antd';
import { Row, Col } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {fetch_client_list} from '../../redux/actions/clientActions';
import { load_client_attendance } from '../../redux/actions/attendanceActions';

const { Option } = Select;




  


class ClientView extends Component {

  constructor(){
    super()
    this.state = {id: '', month: ''}
  }

  client_filter = (clients) => {
    return(
        <div>
        <Select  style={{ width: 120 }} onChange={this.handleClientChange}>
          {clients.map((client) => (
            <Option value={client.id} key={client.key}>{client.name}</Option>
          ))}
        </Select>
      </div>
    )

  }

  handleClientChange = (value) => {
    this.setState({...this.state, id: value})
    this.fetch_attendance(value, this.state.month)
  }

  fetch_attendance = (id, month) => {
     if(id!=='' && month!==''){
      this.props.load_client_attendance({id: id, month: month})
     }
      
  }

  handleMonthChange = (value) => {
    this.setState({...this.state, month: value})
    this.fetch_attendance(this.state.id, value)
  }

  months_filter = () => {
    return(
        <div>
        <Select style={{ width: 120 }} onChange = {this.handleMonthChange}>
          <Option value="1">Jan</Option>
          <Option value="2">Feb</Option>
          <Option value="3">Mar</Option>
          <Option value="4">Apr</Option>
          <Option value="5">May</Option>
          <Option value="6">Jun</Option>
          <Option value="7">Jul</Option>
          <Option value="8">Aug</Option>
          <Option value="9">Sep</Option>
          <Option value="10">Oct</Option>
          <Option value="11">Nov</Option>
          <Option value="12">Dec</Option>
        </Select>
      </div>
    )

}

  componentDidMount(){
    if(this.props.clients.clients.length === 0){
      this.props.fetch_client_list(this.props.history)
    }
  }


  table_headers = () => {
    const columns = [
      {
        title: 'Employee',
        width: 100,
        dataIndex: 'name',
        key: 'name',
        fixed: 'left',
      },
      
    ];

    for(let i=0; i<=31; i++){
      let day = {title: `Day ${i}`, key: `day_${i}`}
      columns.push(day)
    }
  }



  render(){

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
  console.log(this.props)
  return(
      <div>
          <Row>
              <Col sm={4}>
                Select Client
                {this.client_filter(this.props.clients.clients)}
              </Col>
              <Col sm={4}>
                Select Month
                {this.months_filter()}
              </Col>
          </Row>
          <Table columns={this.props.date_headers}  dataSource= {this.props.employee_attendance} scroll={{ x: 2000}} />
      </div>
  )

  }
    
}

const mapStateToProps = () => (state) => {
  return{
      clients: state.clients,
      employee_attendance: state.attendance.employee_attendance,
      date_headers: state.attendance.date_headers
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetch_client_list: fetch_client_list,
  load_client_attendance: load_client_attendance
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ClientView);