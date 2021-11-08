import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard'
import { Product } from '../pages/Products'
import { Repository } from '../pages/Repository'

export const Routes: React.FC = () => {

    return (
        <Switch>
            <Route component={Product} path="/" exact/>
            <Route component={Dashboard} path="/dashboard" />
            <Route component={Repository} path="/repositories/:repository+" />

        </Switch>

    )
}