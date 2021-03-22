import React, { Component } from 'react';
import "./style.css"

export class FormList extends Component{
  constructor (){
    super();
    this.title = '';
  }

  handleTitle (event){
    this.title = event.target.value
  }

  render(){
    return(
      <form className="form-cadastro">
        <input type="text" 
        placeholder="Título" 
        className="form-cadastro_input"
        onChange={this.handleTitle.bind(this)}/>

        <textarea rows={15} 
        placeholder="Escreva sua nota..." 
        className="form-cadastro_input"/>

        <button className="form-cadastro_input form-cadastro_submit">Criar nota</button>
      </form>
    )
  }
}