import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Select } from 'antd';
import '../../stylesheets/fullcalendar.css'

const { Option } = Select;

const handleChange = (value) => {

}

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

const employee_select = () => {
    return(
        <div>
        <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
      </div>
    )
}
export default function AttendanceCalendar(){
    console.log(events())
    return(
        <div>
            <h4> Select Employee</h4>
            {employee_select()}
            <FullCalendar
                defaultView="dayGridMonth"
                plugins={[ dayGridPlugin ]}
                events={events()}
            />
        </div>
    )
}