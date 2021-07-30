import React, { Component } from "react";
import { ReactComponent as DeleteIcon } from "../../assets/img/delete_icon.svg";

import "./CardNota.css";

class CardNota extends Component {
  apagar() {
    const indice = this.props.indice;
    this.props.apagarNota(indice);
  }

  render() {
    return (
      <section className="card-nota">
        <DeleteIcon onClick={this.apagar.bind(this)} className="svg_delete" />
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.title}</h3>
        </header>
        <p className="card-nota_texto">{this.props.message}</p>
      </section>
    );
  }
}

export default CardNota;
