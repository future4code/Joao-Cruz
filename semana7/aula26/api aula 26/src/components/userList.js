import React from 'react';
import axios from 'axios';  
import styled from 'styled-components'



const DeleteButton = styled.span` //tag inline: não quebra linha
color: red;
margin-left: 5px;
border: solid 1px red
`
const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
const axiosConfig = {
    headers: {
        Authorization: "JoaoCruz-Dumont"
    }
}
export class UserList extends React.Component{
    state = {
       userList: []
    };
    componentDidMount = () => {
        this.getAllUsers()
    }

    getAllUsers = () => {
        axios.get(baseUrl, axiosConfig).then(response => {
            this.setState({userList: response.data})
        }).catch(error => {
            console.log(error.message)
        })

      

    }
        
    deleteUser = (userId) => {
        axios.delete(`${baseUrl}/${userId}`, axiosConfig).then(() => {
            alert("Acabaicon")
            this.getAllUsers()    // chama a função para atualizar a tela após deletar.
        }).catch((error) => {
            console.log(error.message);
        })
    }


    render(){
        const renderUserList = this.state.userList.map(usuario => { 
           
            return(
                <p key={usuario.id}>
                    {usuario.name}
                    <DeleteButton onClick={() => this.deleteUser(usuario.id)}>X</DeleteButton>
                </p>
            )
        })
        return (
            <div>
                {renderUserList}
            </div>
          );
    }
}