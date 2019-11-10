import {ADMIN_CREATE_SUCCESS, FETCH_ADMIN_LIST} from '../../constants/admins'

const initialState = {
    admins: [],
    isLoading: false,
}


export default function(state = initialState, action){
    switch(action.type){
        case ADMIN_CREATE_SUCCESS:
            let admins = state.admins
            admins.push(action.payload)
            return {
                ...state,
                admins: admins
            };
        case FETCH_ADMIN_LIST:
            return {
                ...state,
                admins: action.payload
            }
        default: 
            return state;
    }
}