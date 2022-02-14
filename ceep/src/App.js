import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaCategorias from "./components/ListaCategorias";
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notas:[],
      categorias:[]
    };
  }
  criarNota(titulo, texto){
    const novaNota = {titulo, texto};
    const novoArrayNotas = [...this.state.notas,novaNota]
    const novoState = {
      notas: novoArrayNotas
    }
    this.setState(novoState)
  }

  adicionarCategoria(nomeCategoria){
    const novoArrayCategorias = [...this.state.categorias, nomeCategoria];
    const novostate = {...this.state, categorias:novoArrayCategorias};
    this.setState(novostate);
  }

  deletarNota(index){
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index,1);
    this.setState({notas:arrayNotas});
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <main className="conteudo-principal">
          <ListaCategorias 
          adicionarCategoria={this.adicionarCategoria.bind(this)}
          categorias={this.state.categorias}/>

          <ListaDeNotas 
          apagarNota={this.deletarNota.bind(this)}
          notas={this.state.notas}/>
        </main>
      </section>
    );
  }
}

export default App;
