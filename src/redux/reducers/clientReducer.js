import {CLIENT_CREATE_SUCCESS, FETCH_CLIENT_LIST, AUTH_CLIENT_SUCCESS} from '../../constants/clients'

const initialState = {
    clients: [],
    isLoading: false,
    auth_client: null
}


export default function(state = initialState, action){
    switch(action.type){
        case CLIENT_CREATE_SUCCESS:
            let clients = state.clients
            clients.push(action.payload)
            return {
                ...state,
                clients: clients
            };
        case FETCH_CLIENT_LIST:
            return {
                ...state,
                clients: action.payload
            }
        
        case AUTH_CLIENT_SUCCESS:
            return {
                ...state,
                auth_client: action.payload
                
            }

        default: 
            return state;
    }
}