import React from 'react'
import { Title, Form, Tabela} from "./styles"
import {AiFillDelete, AiFillEdit} from 'react-icons/ai'
import logo from '../../assets/vendas.png';
import { api } from '../../services/api';
import { Redirect } from 'react-router-dom';

export const Product: React.FC = () => { 

  

    interface IProduct {
        id?: string;
        name: string;
        quantity: number;
        price: number;
      }

  
    const [actualProduct, setActualProduct] = React.useState<IProduct>({} as IProduct);
  
    const [products, setProducts] = React.useState<IProduct[]>([]);


    let config = {
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MzY1NjMyNDUsImV4cCI6MTYzNjY0OTY0NSwic3ViIjoiOGIwMDcwZWQtNTI3NS00NGYzLTlmYTctYmMxZTE5MGQyZmQwIn0.0L_Eln8NWSBwPYSFht7i6wUwjg9xhuLDPVvNo0uuiwM'
      }
    }

    React.useEffect( () => {
      try {
        api
          .get<IProduct[]>(`/products`, config)
          .then (response => setProducts(response.data))
         ;

      }
      catch {
        alert(`Problema ao consultar produtos`)
      }
    }, [products])
   

    async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
      const aux =  Object.assign(actualProduct, {
        [e.target.name]: e.target.value,
      });
  
      setActualProduct(aux);
    }

    
   

    function addProduct(): void {
      if (!actualProduct.name){
        alert(`Problema ao adicionar produtos`)
      }
      else if (!actualProduct.id){
        try {
          api
            .post<IProduct>(`/products`, actualProduct, config)
            .then (response => alert(`Inserção com sucesso`))
          ;
          setActualProduct({} as IProduct);
        }
        catch {
          alert(`Problema ao inserido produto`)
        }
      }
      else {
        let updateProduct = {
          name: actualProduct.name,
          quantity: actualProduct.quantity,
          price: actualProduct.price
        }
        try {
          api
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

    function deleteProduct(id: string | undefined): void {
      const resp = window.confirm(`Confirma a exclusão do produto ${id}`)
      if (resp){
        try {
          api
            .delete<IProduct>(`/products/${id}`, config)
            .then (response => alert(`Remoção com sucesso `))
           ;
           setActualProduct({} as IProduct);
        }
        catch {
          alert(`Problema ao remover produto`)
        }
      }
     
    }


    function updateProduct(produto: IProduct | undefined): void {
      if (produto) {
        const aux = produto
        setActualProduct(aux)
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

                    <button onClick={addProduct} type="submit">Cadastrar</button>
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
          
            <tr>
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
