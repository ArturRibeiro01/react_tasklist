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

  render() {
    return (
      <section className="conteudo">
        <FormCadastro createCard={this.createTask.bind(this)} />
        <ListaDeNotas notas={this.state.notas} />
      </section>
    );
  }
}

export default App;
