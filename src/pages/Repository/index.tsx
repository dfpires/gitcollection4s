import React from 'react'
import { FiChevronsLeft } from 'react-icons/fi';
import { useRouteMatch } from 'react-router'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import { Header, RepoInfo } from './styles';

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

// props representa as propriedas dos componentes
export const Repository: React.FC = (props) => {

  // cria uma variável que representa o parâmetro vindo na rota
  // que é do tipo RepositoryParams
  const {params} = useRouteMatch<RepositoryParams>();



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
      <RepoInfo>
        <header>
          <img src="..." alt="..."/>
          <div>
            <strong> nome completo do repositório </strong>
            <p> descrição do repositório </p>
          </div>
        </header>
        <ul>
          <li> 
            <strong> quantas estrelas </strong>
            <span> Stars </span>
          </li>
          <li> 
            <strong> quantos forks </strong>
            <span> Forks </span>
          </li>
          <li>
            <strong> qtde de problemas </strong>
            <span> Issues abertas </span>
          </li>
        </ul>
      </RepoInfo>
    </>
  )
}
