import React from 'react';
import styled from 'styled-components';

const FormCont = styled.div`
  width: 350px;
  margin: 45px auto;
`
const Form = styled.div`
  
  margin-left: 35px;
`
const title = styled.h2`
  color: black;
  padding-bottom: 10px;
`
const pergunta = styled.p`
  margin-bottom: 7px;
`
const Input = styled.input`
  margin-bottom: 10px;
  border: 1px solid;
  outline: none;
  width: 100%;
  height: 20px;
  border-radius: 5px;
  padding: 5px;
  padding-left: 8px;
  color: black;
` 
const Select = styled.select`
  margin-bottom: 10px;
  border: 1px solid;
  outline: none;  
  height: 20px;
  border-radius: 5px;
  height: 30px;
  padding: 0 5px;
  color: black;
`

export class Etapa2 extends React.Component {
  render() {
    return (
      <FormCont>
        <title> Informações do Ensino superior:</title>
        <form>
          <pergunta> Caso tenha concluído uma graduação, qual curso?</pergunta>
          <Input/>
          <pergunta> Caso tenha concluído uma graduação, qual a unidade de ensino?</pergunta>
          <Input/>
        </form>
      </FormCont>
    );
  };
};