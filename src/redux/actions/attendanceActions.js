import {RECORD_ATTENDANCE_SUCCESS, RECORD_ATTENDANCE_LOAD, LOAD_ATTENDANCE_START, LOAD_ATTENDANCE_SUCCESS} from '../../constants/attendance';
import {HOST_URL} from '../../constants/api';
import axios from 'axios';



export  const record_attendance = (values) => {
    const headers = {headers: {Authorization: localStorage.getItem('token')}}
    return dispatch => {
        dispatch(record_attendance_load_action())
        axios.post(`${HOST_URL}/attendance/punch_time`, values, headers)
        .then((response) => {
          if(response.data.success){
              dispatch(record_attendance_success_action())
          }
        })
    }
}


const record_attendance_success_action = () => {
    return {
        type: RECORD_ATTENDANCE_SUCCESS
    }
}

const record_attendance_load_action = () => {
    return {
        type: RECORD_ATTENDANCE_LOAD
    }
}

export const load_attendance = (values) => {
    const headers = {headers: {Authorization: localStorage.getItem('token')}}
    return dispatch => {
        dispatch(load_attendance_start_action())
        axios.get(`${HOST_URL}/working_days`,{params: {...values},headers: {Authorization: localStorage.getItem('token')}})
        .then((response) => {
            console.log(response)
            if(response.data.success){
                dispatch(load_attendance_success_action(response.data.data))
            }
        })
    }
}


const load_attendance_start_action = () => {
    return{
        type: LOAD_ATTENDANCE_START
    }
}

const load_attendance_success_action = (payload) => {
    return {
        type: LOAD_ATTENDANCE_SUCCESS,
        payload: payload
    }
}
