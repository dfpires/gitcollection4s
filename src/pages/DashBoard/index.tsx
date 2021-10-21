import React from 'react'
import { Form, Repos, Title } from './styles'

import logo from '../../assets/logo.svg'


export const Dashboard: React.FC = () => {

    // criando uma interface - criei um tipo de dados
    interface GitHubRepository {
        full_name: string;
        description: string;
        owner: {
            login: string;
            avatar_url: string;
        }
    }

    // cria variável e já define o método que altera esta variável
    // o useState altera o valor da variável para vazio
    const [newRepository, setNewRepository] = React.useState('')

    // função chamada quando a caixa de texto for alterada
    // event representa o elemento HTML que sofreu o evento
    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
        // altera a variável newRepository
        // target -> alvo
        setNewRepository(event.target.value) // valor do elemento alvo que sofreu o evento
    }   

    // utilizando o componente estilizado
    return (
        <>
            <img src={logo} alt="GitCollection"/>
            <Title> Dashboard </Title>
            <Form> {/* quando a caixa de texto sofrer alteração, o método handleInputChange será executado */}
                <input onChange={handleInputChange} placeholder="username/repository_name"/>
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
