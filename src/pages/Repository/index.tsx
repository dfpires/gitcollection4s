import React from 'react'

interface IParametros {
    nome: string;
    email: string;
}
// props representa as propriedas dos componentes
export const Repository: React.FC<IParametros> = (props) => {

   //  return (<h2> Repositório  Nome: {props.nome} Email: {props.email}</h2>)
  return (<h2 className="repo"> Repositório  </h2>)
}
