import React from 'react';
import styled from 'styled-components';

const Titulo = styled.h2`
  margin-top: 50px; 
  color: black;
`

export class Final extends React.Component {
  render() {
    return (
      <div>
        
        <p>Muito obrigado por participar!</p> 
        <p>Entraremos em contato.</p>
      </div>
    );
  };
};