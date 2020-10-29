import React from "react";

import styled from "styled-components";
const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
border: 1px solid black;
`
export class UserRegistration extends React.Component{
    state = {
        nameValue: "",
        emailValue: "",
    }

    createUser = () => {
        const body = {     
            name: this.state.nameValue,
            email: this.state.emailValue
        }
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
            headers:{
                Authorization: "JoaoCruz-Dumont"
            }
        }).then(() => {                
            alert("Deu bom")       
            this.setState({nameValue:"", emailValue:""})  
        }).catch(error => {          
            console.log("error.message")
        })
            
    };
    onChangeNameValue = (event) => {
        this.setState({nameValue: event.target.value})
    }
    onChangeEmailValue = (event) => {
        this.setState({emailValue: event.target.value})
    }

    render(){
        return (
            <div>
                <Form>
                    <label>Name: 
                    <input value={this.state.nameValue} 
                    onChange={this.onChangeNameValue} /> 
                    </label>
                    <label>E-mail: 
                    <input value={this.state.emailValue} 
                    onChange={this.onChangeEmailValue}/>
                    </label>
                    <button onClick={this.createUser}>Send</button>
                </Form>
            </div>
          );
    }
}