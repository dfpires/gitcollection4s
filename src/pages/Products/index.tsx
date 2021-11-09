import React from 'react'
import { Title, Form, Tabela} from "./styles"
import {AiFillDelete, AiFillEdit} from 'react-icons/ai'
import logo from '../../assets/vendas.png';
import { api } from '../../services/api';
export const Product: React.FC = () => { 

  // tipo de dados de produto
    interface IProduct {
        id?: string; // objetos sendo ainda criados não tem id
        name: string;
        quantity: number;
        price: number;
      }

  
    // produto atual do formulário - produto selecionado na lista  
    const [actualProduct, setActualProduct] = React.useState<IProduct>({} as IProduct);
  
    // vetor de produtos
    const [products, setProducts] = React.useState<IProduct[]>([]);

      // configuração do Bearer 
      // precisa passar o token para consumiar a API - GET / POST / PUT / DELETE
    let config = {
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MzYzOTU2NzEsImV4cCI6MTYzNjQ4MjA3MSwic3ViIjoiYTlmZWU3YTgtMjM4Zi00MWQ2LTk1MWEtMzQ1MDY5YjdjMGIwIn0.FnEyA_kb6Yps-kMt1bm7WZvnxAkm8nb-SBJ6CnrQhfI'
      }
    }

    // é executado quando o vetor products é alterado ou houver carregamento páginas
    React.useEffect( () => {
      try {
        // alimenta o vetor com os produtos no banco de dados
        api
          .get<IProduct[]>(`/products`, config)
          .then (response => setProducts(response.data))
         ;

      }
      catch {
        alert(`Problema ao consultar produtos`)
      }
    }, [products])
   
    // função será chamada toda vez que tiver uma alteração em qualquer 
    // um dos inputs
    async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
      // cria um objeto aux contendo os valor de actualProduct
      // é associado já contendo a alteração necessária
      // e.target.name pode ser name, quantity ou price
      // e.target.value será o valor do input
      const aux =  Object.assign(actualProduct, {
        [e.target.name]: e.target.value,
      });
      // atualiza os dados de produto atual
      setActualProduct(aux);
    }

    // chamado quando clica no botão
    // server para criar um produto ou atualizar um produto
    function addProduct(): void {
      
      if (!actualProduct.id){ // produto não tem id, então vamos inserir
        try {
          api
            .post<IProduct>(`/products`, actualProduct, config) // insere com o token
            .then (response => alert(`Inserção com sucesso`)) // ok
          ;
          setActualProduct({} as IProduct); // zera o produto atual
        }
        catch {
          alert(`Problema ao inserido produto`)
        }
      }
      else { // produto tem id - vamos atualizar o produto
        let updateProduct = { // os dados do produto para atualizar não pode ter id, este vai na rota
          name: actualProduct.name,
          quantity: actualProduct.quantity,
          price: actualProduct.price
        }
        try {
          api
            // passamos o id do produto para atualizar, o produto atualizado e o token
            .put<IProduct>(`/products/${actualProduct.id}`, updateProduct, config)
            .then (response => alert(`Atualização com sucesso`))
          ;
          setActualProduct({} as IProduct);
        }
        catch {
          alert(`Problema ao atualizar produto`)
        }
      }
    }

    // remove um produto a partir do id
    function deleteProduct(id: string | undefined): void {
      const resp = window.confirm(`Confirma a exclusão do produto ${id}`)
      if (resp){ // caso queira remover
        try {
          api
            .delete<IProduct>(`/products/${id}`, config) // passa o id do produto para remover
            .then (response => alert(`Remoção com sucesso `))
           ;
           setActualProduct({} as IProduct);
        }
        catch {
          alert(`Problema ao remover produto`)
        }
      }
     
    }

    // ela coloca os dados escolhidos na lista para atualização no formulário
    function updateProduct(produto: IProduct | undefined): void {
      if (produto) { // produto tem dados
        const aux = produto
        setActualProduct(aux) // o produto atual será o escolhido da lista
      }
     
    }

    return (
        <>
              <img src={logo} alt="GitCollection" />
                <Title>Catálogo de Produtos</Title>
                <Form >
                    <div> 
                      <label> Nome </label>    
                      <input name="name" value={actualProduct.name} placeholder="Informe o nome" onChange={handleChange}/>
                    </div>
                    <div>
                      <label> Quantidade </label>    
                      <input name="quantity" value={actualProduct.quantity} placeholder="Informe a quantidade" onChange={handleChange}/>
                    </div>
                    <div>
                      <label> Preço </label>    
                      <input name="price" value={actualProduct.price} placeholder="Informe o preço" onChange={handleChange}/>
                    </div>
                    <div>

                    <button onClick={addProduct} type="button">Cadastrar</button>
                    </div>
                </Form>
                 <Tabela>
                  <thead>
                    <tr> 
                      <th> Nome </th>
                      <th> Quantidade </th>
                      <th> Preço </th>
                      <th> Remove </th>
                      <th> Atualiza </th>
                    </tr>
                  </thead>
                  <tbody>
                {
                products.map((product, index) => (
           // cria uma linha na tabela para cada produto do vetor de produtos
            <tr> {/* product representa um elemento do vetor */}
              <td> {product.name} </td>
              <td> {product.quantity}</td>
              <td> {product.price}</td>
              <td>  <button onClick={() => deleteProduct(product.id)}>  <AiFillDelete/> </button></td>
              <td> <button onClick={() => updateProduct(product)}>  <AiFillEdit/> </button></td>
            </tr>
            
          
        ))}
          </tbody>
          </Tabela>
        </>
    )
}
