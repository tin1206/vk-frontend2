import React from 'react';
import { Route, Switch } from 'react-router';

import AdminIndex from '../components/admin'
import EmployeeIndex from '../components/employee'
import ClientIndex from '../components/clients'
import Attendance from '../components/attendance'
import QrScanner from '../components/qr_code_scanner/qr_scanner'
import ContractIndex from '../components/contracts'
import ContractEdit from '../components/contracts/contractEdit' 

export const auth_routes = () => {
    return(
        <Switch>
            <Route path='/contracts/edit' component = {ContractEdit} />
            <Route path='/scanner' component = {QrScanner} />
            <Route path='/contracts' component = {ContractIndex} />
            <Route path='/clients' component = {ClientIndex} />
            <Route path='/attendance' component = {Attendance} />
            <Route path='/admins' component = {AdminIndex} />
            <Route path='/employees' component = {EmployeeIndex} />
        </Switch>
    )
}