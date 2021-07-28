import React, { Component } from "react";
import FormCadastro from "./components/FormCadastro";
import ListaDeNotas from "./components/ListaDeNotas";

import "./assets/App.css";
import "./assets/index.css";

class App extends Component {
  constructor() {
    this.notas = [];
  }

  createTask(title, message) {
    console.log(`Uma nova nota foi criada ${title} ${message}`);
  }

  render() {
    return (
      <section className="conteudo">
        <FormCadastro createCard={this.createTask} />
        <ListaDeNotas notas={[this.notas]} />
      </section>
    );
  }
}

export default App;
