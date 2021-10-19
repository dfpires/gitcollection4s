import React from 'react'
import { Form, Repos, Title } from './styles'

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
            <Repos>
                <a href="/repositories">
                    <img src="https://avatars.githubusercontent.com/u/25186100?s=400&u=4a454853ebc88b9667c537c6c6b02f45b34f6166&v=4"
                    alt="Repositório"></img>
                    <div>
                        <strong> dfpires/gitcollection4s</strong>
                        <p> Disciplina de Paradigmas de Programação II </p>
                    </div>
                </a>
            </Repos>
        </>
    )

}
