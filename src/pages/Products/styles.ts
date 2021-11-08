import styled from 'styled-components';
import { shade } from 'polished';


// Title representa o H1
export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 900px;
  line-height: 56px;
  margin-top: 80px;
`;


export const Form = styled.form`
  margin-top: 30px;

  div {
    margin-top: 10px;
    label {
      float:left;
      display: block;
      width: 100px;
    }
    input {
      margin-left: 0px;
      width: 300px;
    }
    button{
      width: 160px;
    background-color: #04d361;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;
    &:hover {
      background-color: ${shade(0.2, '#04d361')};
    }
    }
  }
`;

export const Tabela = styled.table`
  margin-top: 50px;
  th {
    padding: 20px;
    border-bottom: 1px solid black;
  }
  td {
    padding: 20px;
    border-bottom: 1px solid black;
    button {
      border:none;
    }
  }
  
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;