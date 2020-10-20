import React from 'react';
import styled from 'styled-components';
import {Etapa1} from './components/etapa1';
import {Etapa2} from './components/etapa2';
import {Etapa3} from './components/etapa3';
import {Final} from './components/final';
import {ButtonNext} from './components/buttonfinal';


const AppContainer = styled.div`
 
  width: 50%;
  margin: 0 auto;
  background: none;
  height: 100vh;

  text-align: center;
  font-family: sans-serif;
  color: black;
 
`
const title = styled.h1`
  color: black;
  background: white;
  margin-top: 15px;
  margin-bottom: 5px;
  font-family: san-serif;
`

class App extends React.Component {
  state = {
    etapa: 1,
    valorNome: '',
    valorIdade: '',
    valorEmail: ''
  };
  onChangeNome = data => {
    this.setState({
      valorNome: data.target.value
    });
  };
  onChangeIdade = data => {
    this.setState({
      valorIdade: data.target.value
    });
  };
  onChangeEmail = data => {
    this.setState({
      valorEmail: data.target.value
    });
  };
  irProximaEtapa = () => {
    if (this.state.valorNome === '' ||
        this.state.valorIdade === '' || 
        this.state.valorEmail === '') {
      alert('Preencha os campos obrigatórios (*)!')
    } else {
      this.setState({
        etapa: this.state.etapa + 1
      });
    };
  };
  render() {
    let etapa;
    let botao;
    switch (this.state.etapa) {
      case 1:
        etapa =
         <Etapa1
          valorNome={this.state.valorNome}
          valorIdade={this.state.valorIdade}
          valorEmail={this.state.valorEmail}
          changeNome={this.onChangeNome}
          changeIdade={this.onChangeIdade}
          changeEmail={this.onChangeEmail}
         />;
         botao = <ButtonNext onClick={this.irProximaEtapa}/>;
        break;
      case 2:
        etapa = <Etapa2/>;
        botao = <ButtonNext onClick={this.irProximaEtapa}/>;
        break;
      case 3:
        etapa = <Etapa3/>;
        botao = <ButtonNext onClick={this.irProximaEtapa}/>;
        break;
      case 4: 
        etapa = <Final/>;
        break;
    };
    return (
      <AppContainer>
        <title>Labenu Forms</title>
        {etapa}
        {botao}
      </AppContainer>
    );
  };
};
export default App;