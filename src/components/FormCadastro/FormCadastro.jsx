import React, { Component } from "react";

import "./FormCadastro.css";

class FormCadastro extends Component {
  constructor(props) {
    super(props);
    this.title = "";
    this.message = "";
  }

  _handleTitulo(event) {
    event.stopPropagation();
    this.title = event.target.value;
  }
  _handleMessage(event) {
    event.stopPropagation();
    this.message = event.target.value;
  }

  _createCard(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.createCard(this.title, this.message);
  }

  render() {
    return (
      <>
        <form className="form-cadastro" onSubmit={this._createCard.bind(this)}>
          <input
            className="form-cadastro_input"
            type="text"
            placeholder="Titulo"
            onChange={this._handleTitulo.bind(this)}
          />
          <textarea
            rows={15}
            placeholder="Escreva sua nota..."
            className="form-cadastro_input"
            onChange={this._handleMessage.bind(this)}
          ></textarea>
          <button className="form-cadastro_input form-cadastro_submit">
            Criar Anotação
          </button>
        </form>
      </>
    );
  }
}

export default FormCadastro;
