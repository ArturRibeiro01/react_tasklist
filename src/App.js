import React, { Component } from "react";
import FormCadastro from "./components/FormCadastro";
import ListaDeNotas from "./components/ListaDeNotas";

import "./assets/App.css";
import "./assets/index.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      notas: [],
    };
  }

  createTask(title, message) {
    const novaNota = { title, message };
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas: novoArrayNotas,
    };
    this.setState(novoEstado);
  }

  deleteCard(index) {
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index, 1);
    this.setState({ notas: arrayNotas });
    console.log("apagou");
  }

  render() {
    return (
      <section className="conteudo">
        <FormCadastro createCard={this.createTask.bind(this)} />
        <ListaDeNotas
          apagarNota={this.deleteCard.bind(this)}
          notas={this.state.notas}
        />
      </section>
    );
  }
}

export default App;
