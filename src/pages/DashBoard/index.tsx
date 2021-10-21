import React from 'react'
import { Form, Repos, Title } from './styles'

import logo from '../../assets/logo.svg'
import {api} from '../../services/api'
import {Link} from 'react-router-dom'

export const Dashboard: React.FC = () => {

    // criando uma interface - criei um tipo de dados que minimiza todos os campos trazidos do github
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
    // repositories é uma lista de GitHubRepositories, que inicialmente será uma lista vazia
    const [repositories, setRepositories] = React.useState<GitHubRepository[]>([])

    // função chamada quando a caixa de texto for alterada
    // event representa o elemento HTML que sofreu o evento
    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
        // altera a variável newRepository
        // target -> alvo
        setNewRepository(event.target.value) // valor do elemento alvo que sofreu o evento
    }   

    async function handleAddRepository(event: React.FormEvent<HTMLFormElement>, ): Promise<void>{
        // não recarrega a página
        event.preventDefault();
        // chama a api passando o nome do repositório a ser buscado
        // retorna o resultado
        const response = await api.get<GitHubRepository>(`repos/${newRepository}`)
        const repository = response.data // dados da resposta
        // adicionar à lista de repositórios o novo repositório que veio
        // spread ... recupera todos os repositórios da lista e adiciona o novo
        setRepositories([...repositories, repository])
        // limpa o repositório atual - para limpar caixa de texto
        setNewRepository('')
    }
    // utilizando o componente estilizado
    return (
        <>
            <img src={logo} alt="GitCollection"/>
            <Title> Dashboard </Title>
            {/* quando usuário clicar no botão, a função handleAddRepository será chamada */}
            <Form onSubmit={handleAddRepository}> {/* quando a caixa de texto sofrer alteração, o método handleInputChange será executado */}
                <input onChange={handleInputChange} placeholder="username/repository_name"/>
                <button type="submit"> Buscar </button>
            </Form>
            <Repos>
                
                {
                repositories.map( (repository, index) => (
                        <Link to={`/repositories/${repository.full_name}`} 
                              key={repository.full_name + index}
                              >
                        
                                <img src={repository.owner.avatar_url} alt={repository.owner.login}/>
                                <div>
                                    <strong> {repository.full_name}</strong>
                                    <p> {repository.description} </p>
                                </div>
                        </Link>
                    )
                )
                }
                
            </Repos>
        </>
    )

}
