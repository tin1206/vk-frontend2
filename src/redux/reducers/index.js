import {combineReducers} from "redux";
import authenticationReducer from './authReducer';
import clientReducer from './clientReducer';
import adminReducer from './adminReducer';
import employeeReducer from './employeeReducer';
import attendanceReducer from './attendanceReducer';

export default combineReducers({
    auth: authenticationReducer,
    clients: clientReducer,
    employees: employeeReducer,
    admins: adminReducer,
    attendance: attendanceReducer
})
