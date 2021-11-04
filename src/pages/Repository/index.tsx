import React from 'react'
import { FiChevronsLeft } from 'react-icons/fi';
import { useRouteMatch } from 'react-router'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import { Header, RepoInfo } from './styles';

import {api} from '../../services/api'

// criando um tipo de dado - é o dado do parâmetro da rota
interface RepositoryParams {
    repository: string;
}

interface GitHubRepository {
  full_name: string;
  description: string;
  forks_count: number;
  open_issues_count: number;
  stargazers_count: number;
  owner: {
      login: string;
      avatar_url: string;
  }
}

// cria um tipo de dado com as infos da issue
interface GithubIssue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  }
}

// props representa as propriedas dos componentes
export const Repository: React.FC = (props) => {

  // cria uma variável que representa o parâmetro vindo na rota
  // que é do tipo RepositoryParams
  const {params} = useRouteMatch<RepositoryParams>();

  // cria uma variável (estado) que recebe os dados da API contendo repositório
  // variável do tipo GitHubRepository, inicialmente, variável começa com null
  const [repository, setRepository] = React.useState<GitHubRepository | null>(null)

  // a função dentro do useEffect vai ser executada toda vez que o repositório for alterado
  React.useEffect( () => {
      // a api retorna um conteúdo do tipo GithubRepository e eu atribuo para a variável repository
      api
        .get<GitHubRepository>(`repos/${params.repository}`)
        .then(response => setRepository(response.data)) 
  }, [params.repository])
   //  return (<h2> Repositório  Nome: {props.nome} Email: {props.email}</h2>)
  return (
    <>
      <Header>
          <img src={logo} alt="GitCollection"/>
          <Link to="/">
            <FiChevronsLeft /> {/* arte com seta para esquerda*/}  
            Voltar
          </Link>
      </Header>

    {/* caso a api tenha retornado algum repositório*/}
      {repository && (
     <RepoInfo>
        <header>
          <img src={repository.owner.avatar_url} alt={repository.owner.login}/>
          <div>
            <strong> {repository.full_name} </strong>
            <p> {repository.description} </p>
          </div>
        </header>
        <ul>
          <li> 
            <strong> {repository.stargazers_count} </strong>
            <span> Stars </span>
          </li>
          <li> 
            <strong> {repository.forks_count} </strong>
            <span> Forks </span>
          </li>
          <li>
            <strong> {repository.open_issues_count} </strong>
            <span> Issues abertas </span>
          </li>
        </ul>
      </RepoInfo>
      )}
    </>
  )
}
