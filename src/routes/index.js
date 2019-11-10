import React from 'react';
import { Route, Switch } from 'react-router';

import AdminIndex from '../components/admin';
import EmployeeIndex from '../components/employee';
import ClientIndex from '../components/clients';
import ClientForm from '../components/clients/clientForm';
import ClientAuth from '../components/clients/clientsAuth';
import Attendance from '../components/attendance';
import QrScanner from '../components/qr_code_scanner/qr_scanner';
import ContractIndex from '../components/contracts';
import ContractForm from '../components/contracts/contractForm';
import Dashboard from '../components/dashboard';
import EmployeeForm from '../components/employee/employeeForm';
import Signin from '../components/authentication/signin';
import Homepage from '../components/homepage';
import AttendanceScanner from '../components/attendance/attendanceScanner';


export const auth_routes = () => {
    return(
        <Switch>
            <Route path='/contracts/new' component = {ContractForm} />
            <Route path='/scanner' component = {QrScanner} />
            <Route path='/contracts' component = {ContractIndex} />
            <Route path='/clients/new' component = {ClientForm} />
            <Route path='/clients' component = {ClientIndex} />
            <Route path='/attendance' component = {Attendance} />
            <Route path='/admins' component = {AdminIndex} />
            <Route path='/employees/new' component = {EmployeeForm} />
            <Route path='/employees' component = {EmployeeIndex} />
            <Route path='/' exact component = {Dashboard} />
        </Switch>
    )
}

export const client_routes = () => {
    return(
        <Switch>
            <Route path='/clients/signin' component = {ClientAuth} />
        </Switch>
    )
}

export const unauth_routes = () => {
    return(
        <Switch>
            <Route path='/signin' component = {Signin} />
            <Route path='/clients/signin' component = {ClientAuth} />
            <Route path='/attendance_scanner' component = {AttendanceScanner} />
            <Route path='/' component = {Homepage} />
        </Switch>
    )
}