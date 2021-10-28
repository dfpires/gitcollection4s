import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard'
import { Repository } from '../pages/Repository'
// importa as classes do react-router-dom


export const Routes: React.FC = () => {

    return (
        // vai trocar entre as páginas
        
        <Switch>
            <Route component={Dashboard} path="/" exact/> { /* DashBoard é o componente raiz e a página padrão da aplicação */}
            {/* :repository é como se fosse uma variável, que vamos usar para trocar 
            dados entre componentes 
            colocamos o + para indicar que a barra não faz parte da rota ou da URL */}
            <Route component={Repository} path="/repositories/:repository+"/> {/* criando a rota para os repositórios */}
        </Switch>
    )
}