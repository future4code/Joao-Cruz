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
const select = styled.select`
  margin-bottom: 10px;
  border: 1px solid;
  outline: none;  
  height: 20px;
  border-radius: 5px;
  height: 30px;
  padding: 0 5px;
  color: black;
`

export class Etapa3 extends React.Component {
  render() {
    return (
      <FormCont>
        <title> Informações gerais de ensino:</title>
        <Form>
          <pergunta> Caso não tenha concluído uma graduação, por que não concluiu?</pergunta>
          <Input/>
          <pergunta> Você fez algum curso complementar?</pergunta>
          <select>
            <option value={''}>Selecione uma opção</option>
            <option value={'nenhum'}>Nenhum</option>
            <option value={'tecnico'}>Curso técnico</option>
            <option value={'ingles'}>Curso de inglês</option>
          </select>
        </Form>
      </FormCont>
    );
  };
};