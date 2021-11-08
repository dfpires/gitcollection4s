import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navegacao } from './styles'
import {FcSalesPerformance} from 'react-icons/fc'
export const Header: React.FC = () => { 
    return (
        <>
        <Navegacao>
            <ul>
                <li><NavLink to="/"> <FcSalesPerformance/> </NavLink></li>
                <li><NavLink to="/"> Produtos </NavLink></li>
                <li> <NavLink to="/dashboard"> GitCollection </NavLink> </li>
            </ul>
        </Navegacao>
        </>
    )
}