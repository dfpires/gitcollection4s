import React from 'react'
import { Title } from './styles'

import logo from '../../assets/logo.svg'

export const Dashboard: React.FC = () => {
    // utilizando o componente estilizado
    return (
        <>
            <img src={logo} alt="GitCollection"/>
            <Title> Dashboard </Title>
        </>
    )

}
