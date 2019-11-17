import React, {Component} from 'react';
import QrScanner from '../qr_code_scanner/qr_scanner'
import { Result} from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {record_attendance} from '../../redux/actions/attendanceActions';

class AttendanceScanner extends Component{

    constructor(){
        super()
    }

    onScanSuccess = (data) => {
        const values = {client_id: this.props.client.id, employee_id: data}
        this.props.record_attendance(values)
    }

        
    render(){
        console.log(this.props)
        return(
            <div>
                <QrScanner onScanSuccess = {this.onScanSuccess} />
                {this.props.showMessage && 
                <Result
                  status="success"
                  title = "Attendance Recorded"
                />
                }
            </div>    
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    record_attendance: record_attendance
  }, dispatch)

const mapStateToProps = () => (state) => {
    return {
            client: state.clients.auth_client,
            showMessage: state.attendance.showMessage
    }
}


 export default connect(mapStateToProps, mapDispatchToProps)(AttendanceScanner)