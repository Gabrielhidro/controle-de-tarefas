import React, { Component } from 'react';
import CardNotes from "../cardNotes/cardNotes"
import "./style.css"

export class ListaDeNotas extends Component {
  render(){
    return(
      <ul className="lista-notas">
        {Array.of("Trabalho", "Trabalho", "Estudo").map((item, index) => {
          return(
        <li key={index} className="lista-notas_item">
          <CardNotes/>
        </li>
        );
        })}
      </ul>
    );
  }
}