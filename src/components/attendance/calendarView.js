import React, {Component} from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Select } from 'antd';
import {fetch_employee_list} from '../../redux/actions/employeeActions';
import {load_attendance}  from  '../../redux/actions/attendanceActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import '../../stylesheets/fullcalendar.css'
// import { Component } from '@fullcalendar/core';

const { Option } = Select;



const events = () => {
    let e = []
    for(let i=0; i<31;i++){
        if(i<9){
          e.push({title: '10:00 - 6:00', date: `2019-10-0${i+1}`})
        }
        else{
            e.push({title: '3:00 - 11:00', date: `2019-10-${i+1}`})
        }
        
    }
    return e
}


 class  AttendanceCalendar extends Component{

    constructor(){
        super()
        this.state = {selectedEmployee: null, currentMonth: null, currentYear: null};
    }

    componentDidMount(){
        if(this.props.employees.employees.length === 0){
            this.props.fetch_employee_list(this.props.history)
        }
        this.setCurrentMonth()
        this.monthNav()
    }

    handleChange = (value) => {
        console.log(value)
        this.setState({...this.state, selectedEmployee: value})
        this.props.load_attendance({employee_id: value,
                                    month: this.state.currentMonth + 1,
                                    year: this.state.currentYear
                                })
    }

    setCurrentMonth = () => {
        let calendarApi = this.calendarRef.current.getApi()
        const date = calendarApi.getDate()
        this.setState({...this.state,currentMonth: date.getMonth(), currentYear: date.getFullYear()})
    }

    monthNav = () => {
        document.getElementsByClassName('fc-prev-button')[0].addEventListener('click',this.setCurrentMonth())
          document.getElementsByClassName('fc-next-button')[0].addEventListener('click', this.setCurrentMonth())
    }

    employee_select = (employees) => {
        return(
            <div>
            <Select  style={{ width: 120 }} onChange={this.handleChange}>
              {employees.map((employee) => (
                <Option value={employee.id} key={employee.key}>{employee.name}</Option>
              ))}
            </Select>
          </div>
        )
    }

   calendarRef = React.createRef()

    render(){
        console.log(this.props)
        return(
            <div>
                <h4> Select Employee</h4>
                {this.employee_select(this.props.employees.employees)}
                <FullCalendar
                    defaultView="dayGridMonth"
                    plugins={[ dayGridPlugin ]}
                    ref = {this.calendarRef}
                    events = {this.props.working_days}
                />
            </div>
        )
    }
}

const mapStateToProps = () => (state) => {
    return{
        employees: state.employees,
        working_days: state.attendance.working_days
    }
  }
  
  const mapDispatchToProps = (dispatch) => bindActionCreators({
    fetch_employee_list: fetch_employee_list,
    load_attendance: load_attendance
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AttendanceCalendar)