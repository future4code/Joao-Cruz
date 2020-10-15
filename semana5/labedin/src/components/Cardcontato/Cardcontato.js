import React from 'react'
import './Cardcontato.css'

export function Cardcontato(props){
    return (
        <div>
            <div className="Cardcontato-container">
                
                <h4>E-mail: </h4>
                <p>{ props.email }</p>
            </div>
            <div className="Cardcontato-container">
                
                <h4>Endereço: </h4>
                <p>{ props.endereco }</p>
            </div>
        </div>
    )
}