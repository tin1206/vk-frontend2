import {CLIENT_CREATE_SUCCESS, FETCH_CLIENT_LIST, AUTH_CLIENT_SUCCESS} from '../../constants/clients';
import {HOST_URL} from '../../constants/api';
import axios from 'axios';
import { dispatch } from 'rxjs/internal/observable/pairs';


export const create_client = (values, history) => {
    const data = {}
    data['client'] = values
    const headers = {headers: {Authorization: localStorage.getItem('token')}}
    return dispatch => {
        axios.post(`${HOST_URL}/clients`, data, headers)
        .then((response)=>{
            if(response.data.success){
                dispatch(create_client_action(response.data.data))
                history.push('/clients')
            }
        })
    }
}


const create_client_action = (payload) => {
    return {
        type: CLIENT_CREATE_SUCCESS,
        payload: payload
    }
}

const fetch_client_list_action = (payload) => {
    return {
        type: FETCH_CLIENT_LIST,
        payload: payload
    }
} 

export const fetch_client_list = (history) => {
    const headers = {headers: {Authorization: localStorage.getItem('token')}}
    return dispatch => {
        axios.get(`${HOST_URL}/clients`, headers)
        .then((response) => {
            if(response.data.success){
                dispatch(fetch_client_list_action(response.data.data))
            }
        })
    }
}

export const auth_client = (values, history) => {
    return dispatch => {
        axios.get(`${HOST_URL}/authentication/client_sign`, values)
        .then((response) => {
            if(response.data.success){
                dispatch(auth_client_action(response.data.data))
                history.push('/attendance_scanner')
            }
        })
    }
}

const auth_client_action = (payload) => {
    return {
        type: AUTH_CLIENT_SUCCESS,
        payload: payload
    }
}