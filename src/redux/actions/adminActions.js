import {ADMIN_CREATE_SUCCESS, FETCH_ADMIN_LIST} from '../../constants/admins';
import {HOST_URL} from '../../constants/api';
import axios from 'axios';


export const create_admin = (values, history) => {
    const data = {}
    data['admin'] = values
    const headers = {headers: {Authorization: localStorage.getItem('token')}}
    return dispatch => {
        axios.post(`${HOST_URL}/admins`, data, headers)
        .then((response)=>{
            if(response.data.success){
                dispatch(create_admin_action(response.data.data))
                history.push('/admins')
            }
        })
    }
}


const create_admin_action = (payload) => {
    return {
        type: ADMIN_CREATE_SUCCESS,
        payload: payload
    }
}

const fetch_admin_list_action = (payload) => {
    return {
        type: FETCH_ADMIN_LIST,
        payload: payload
    }
} 

export const fetch_admin_list = (history) => {
    const headers = {headers: {Authorization: localStorage.getItem('token')}}
    return dispatch => {
        axios.get(`${HOST_URL}/admins`, headers)
        .then((response) => {
            if(response.data.success){
                dispatch(fetch_admin_list_action(response.data.data))
            }
        })
    }
}