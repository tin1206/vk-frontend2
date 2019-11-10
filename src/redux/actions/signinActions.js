import {SIGN_IN_SUCCESS, SIGN_IN_LOADING, SIGN_OUT_SUCCESS} from '../../constants/authentication';
import {HOST_URL} from '../../constants/api';
import axios from 'axios';


export const sign_in = (values, history) => {
    return dispatch => {
        dispatch({
            type: SIGN_IN_LOADING,
        })
    axios.post(`${HOST_URL}/authentication/sign_in`, values)
    .then((response)=>{
        if(response.data.success){
            dispatch(signin_action(response.data.data))
            localStorage.setItem('token', response.data.data.token)
            history.push('/')

        }
    })
   }
}

export const sign_out = (value) => {
    return dispatch => {
        dispatch(sign_out_action())
        window.location.reload()
    }

}

const sign_out_action = () => {
    return {
        type: SIGN_OUT_SUCCESS
    }
}

const signin_action = (payload) => {
    return {
      type: SIGN_IN_SUCCESS,
      payload: payload
    }
}