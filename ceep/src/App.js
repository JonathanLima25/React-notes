import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaCategorias from "./components/ListaCategorias";
import "./assets/App.css";
import "./assets/index.css";
import Categorias from "./dados/Categorias";
import ArrayDeNotas from "./dados/Notas";

class App extends Component {
  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas()
    // this.state = {
    //   notas:[],
    //   // categorias:[]
    // };
  }


  // criarNota(titulo, texto, categoria){
  //   const novaNota = {titulo, texto, categoria};
  //   const novoArrayNotas = [...this.state.notas,novaNota]
  //   const novoState = {
  //     notas: novoArrayNotas
  //   }
  //   this.setState(novoState)
  // }

  // adicionarCategoria(nomeCategoria){
  //   const novoArrayCategorias = [...this.state.categorias, nomeCategoria];
  //   const novostate = {...this.state, categorias:novoArrayCategorias};
  //   this.setState(novostate);
  // }

  // deletarNota(index){
  //   let arrayNotas = this.state.notas;
  //   arrayNotas.splice(index,1);
  //   this.setState({notas:arrayNotas});
  // }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro categorias={this.categorias} 
        criarNota={this.notas.criarNota} />
        <main className="conteudo-principal">
          <ListaCategorias 
          adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
          categorias={this.categorias}/>

          <ListaDeNotas 
          apagarNota={this.notas.apagarNota}
          notas={this.notas.notas}/>
        </main>
      </section>
    );
  }
}

export default App;
