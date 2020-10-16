import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import Perfil from'./img/jvcimg.jpg';
import Exp from'./img/ExpediaGroup.jpg';
import music from './img/gibson.jpg';
import { Cardcontato } from './components/Cardcontato/Cardcontato';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem src = {Perfil} 
          nome="João Vitor da Cruz" 
          descricao="Pessoa maravilhosa, que se apaixonou pelo processo de estudar um tema quase que o dia inteiro, e so conseguir entregar o projeto a noite (mas e so agora no começo)"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      <div className="page-section-container">
        <h2>Endereço / Contato</h2>
        <Cardcontato
          icoEmail={`https://lh3.googleusercontent.com/proxy/bkNfgbQxeDF0NC3pJ9LhfDOks4IzRRvygilOsVNbbjXi_Jv76GkD1aXSQsCWwlZg83ZFhX1j6vwtuJZjsOtYgDj5zy1YMiEzXD1NcWlQPqR91BASRYg`}
          email={`sojohhny@gmail.com`}
          icoEndereco={`https://i.pinimg.com/736x/ba/67/c4/ba67c44d437af206e48a7f9f8048b870.jpg`}
          endereco={`Loonge`}
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          img src={Exp} 
          nome="Expedia Group/Tengroup" 
          descricao="Concierge, Retenção de seguros, Gestor de reservas Agente de Viagm, mas tudo isso ficou no pasado, atualmente Desenvvolvedor Front End e futuro Full Stack" 
        />
        
        <CardGrande 
          imagem src= {music}
          nome="Musico" 
          descricao="Já fui músico também, e já lecionei violão e guitarra." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
