import {SIGN_IN_SUCCESS, SIGN_IN_FAIL, SIGN_IN_LOADING, SIGN_OUT_SUCCESS} from '../../constants/authentication'




const initialState = {
    token: localStorage.getItem('token'),
    isAutheticated: localStorage.getItem('token') ? true : false,
    isLoading: false,
    user: null
}

export default function(state = initialState, action) {
    switch(action.type){
        case SIGN_IN_LOADING: 
            return {
                ...state,
                isLoading: true,
            };

        case SIGN_IN_FAIL:
            return {
                ...state,
                isAutheticated: false,
                isLoading: false,
                user: null
            };

        case SIGN_IN_SUCCESS:
            return {
                ...state,
                isAutheticated: true,
                token: action.payload.token,
                isLoading: false,
                user: action.payload.data
            };

        case SIGN_OUT_SUCCESS:
            localStorage.clear()
            return {
                ...state,
                isAutheticated: false,
                token: null,
                isLoading: false,
                user: null
            }
        default:
            return state;

    }
}