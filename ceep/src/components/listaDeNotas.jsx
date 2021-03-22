import React, { Component } from 'react';
import CardNotes from "./cardNotes"

export class ListaDeNotas extends Component {
  render(){
    return(
      <ul>
        {Array.of("Trabalho", "Trabalho", "Estudo").map(item => {
          return(
        <li>
          <div>{item}</div>
          <CardNotes/>
        </li>
        );
        })}
      </ul>
    );
  }
}