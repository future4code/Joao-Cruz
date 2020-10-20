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
export class Etapa1 extends React.Component {
  render() {
    return (
      <FormCont>
        <title> Dados gerais:</title>
        <Form>
          <pergunta> Qual o seu nome? </pergunta>
          <Input
            value={this.props.valorNome}
            onChange={this.props.changeNome}
          />
          <pergunta> Qual sua idade? </pergunta>
          <Input
            value={this.props.valorIdade}
            onChange={this.props.changeIdade}
          />
          <pergunta> Qual seu email? </pergunta>
          <Input
            value={this.props.valorEmail}
            onChange={this.props.changeEmail}
          />
          <pergunta> Qual a sua escolaridade?</pergunta>
          <select>
            <option value={''}>Selecione uma opção</option>
            <option value={'medioCompleto'}>Ensino médio completo</option>
            <option value={'medioInompleto'}>Ensino médio incompleto</option>
            <option value={'superiorCompleto'}>Ensino superior completo</option>
            <option value={'superiorInCompleto'}>Ensino superior incompleto</option>
          </select>
        </Form>
      </FormCont>
    );
  };
};