import React from 'react'
import { Form, Title } from './styles'

import logo from '../../assets/logo.svg'

export const Dashboard: React.FC = () => {
    // utilizando o componente estilizado
    return (
        <>
            <img src={logo} alt="GitCollection"/>
            <Title> Dashboard </Title>
            <Form>
                <input placeholder="username/repository_name"/>
                <button type="submit"> Buscar </button>
            </Form>
        </>
    )

}
