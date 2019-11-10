import {EMPLOYEE_CREATE_SUCCESS, FETCH_EMPLOYEE_LIST} from '../../constants/employees';
import {HOST_URL} from '../../constants/api';
import axios from 'axios';


export const create_employee = (values, history) => {
    const data = {}
    data['employee'] = values
    const headers = {headers: {Authorization: localStorage.getItem('token')}}
    return dispatch => {
        axios.post(`${HOST_URL}/employees`, data, headers)
        .then((response)=>{
            if(response.data.success){
                dispatch(create_employee_action(response.data.data))
                history.push('/employees')
            }
        })
    }
}


const create_employee_action = (payload) => {
    return {
        type: EMPLOYEE_CREATE_SUCCESS,
        payload: payload
    }
}

const fetch_employee_list_action = (payload) => {
    return {
        type: FETCH_EMPLOYEE_LIST,
        payload: payload
    }
} 

export const fetch_employee_list = (history) => {
    const headers = {headers: {Authorization: localStorage.getItem('token')}}
    return dispatch => {
        axios.get(`${HOST_URL}/employees`, headers)
        .then((response) => {
            if(response.data.success){
                dispatch(fetch_employee_list_action(response.data.data))
            }
        })
    }
}