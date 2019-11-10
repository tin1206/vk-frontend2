import {EMPLOYEE_CREATE_SUCCESS, FETCH_EMPLOYEE_LIST} from '../../constants/employees'

const initialState = {
    employees: [],
    isLoading: false,
}


export default function(state = initialState, action){
    switch(action.type){
        case EMPLOYEE_CREATE_SUCCESS:
            let employees = state.employees
            employees.push(action.payload)
            return {
                ...state,
                employees: employees
            };
        case FETCH_EMPLOYEE_LIST:
            return {
                ...state,
                employees: action.payload
            }
        default: 
            return state;
    }
}