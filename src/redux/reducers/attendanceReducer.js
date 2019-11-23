import {LOAD_EMPLOYEE_ATTENDANCE, RECORD_ATTENDANCE_SUCCESS, RECORD_ATTENDANCE_LOAD, LOAD_ATTENDANCE_START, LOAD_ATTENDANCE_SUCCESS} from '../../constants/attendance';

const initialState = {
    showMessage: false,
    working_days: []
}


export default function(state = initialState, action){
    switch(action.type){
        case RECORD_ATTENDANCE_SUCCESS:
            return {
                ...state,
                showMessage: true
            }

        case RECORD_ATTENDANCE_LOAD:
            return {
                ...state,
                showMessage: false
            }

        case LOAD_ATTENDANCE_START:
            return state 

        case LOAD_ATTENDANCE_SUCCESS:
            return {
                ...state,
                working_days: action.payload
            }

        case LOAD_EMPLOYEE_ATTENDANCE: 
            return {
                ...state,
                employee_attendance: action.payload.attendance,
                date_headers: action.payload.date_headers 
            }

        default: 
            return state;
    }
}