import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard'
import { Login } from '../pages/Login'
import { Product } from '../pages/Products'
import { Repository } from '../pages/Repository'

export const Routes: React.FC = () => {

    return (
        <Switch>
            <Route component={Login} path="/" exact/>
            <Route component={Product} path="/product"/>
            <Route component={Dashboard} path="/dashboard" />
            <Route component={Repository} path="/repositories/:repository+" />
        </Switch>

    )
}