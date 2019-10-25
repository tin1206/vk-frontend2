import React, {Component} from 'react';
import AttendanceCalendar from './calendarView';
import ClientView from './clientView';
import { Row, Col } from 'antd';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

class Attendance extends Component{
    constructor(){
        super()
        this.state = {view_type: "calendar"}
    }

    render(){
        return(
            <Tabs defaultActiveKey="1">
            <TabPane tab="Calendar" key="1">
            <Row type="flex" justify="center" align="top">
              <Col sm={18} xs={32}>
                  <div style={{minHeight: "150vh"}}>
                   <AttendanceCalendar />
                  </div>
              </Col>   
            </Row>
            </TabPane>
            <TabPane tab="Client" key="2">
              <ClientView/>
            </TabPane>
            <TabPane tab="Tab 3" key="3">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
        )
    }
}

export default Attendance