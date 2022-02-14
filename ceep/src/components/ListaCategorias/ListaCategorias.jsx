import React, { Component } from "react";
import "./style.css"

class listaCategorias extends Component {
    constructor(){
        super();
        this.state = {categorias:[]}
    }

    componentDidMount(){
        this.props.categorias.inscrever(this._novasCategorias.bind(this));
    }

    _novasCategorias(categorias){
        this.setState({...this.state, categorias});
    }
    _handleEventoinput(e){
        if(e.key == "Enter"){
            let valorCategoria = e.target.value;
            this.props.adicionarCategoria(valorCategoria);
        }
    }

    render() {
        return(
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    {this.state.categorias.map((categoria, index) => <li key={index} className="lista-categorias_item">{categoria}</li>)}
                </ul>
                <input 
                type="text" 
                placeholder="Adicionar categoria..."
                className="lista-categorias_input"
                onKeyUp={this._handleEventoinput.bind(this)}>
                </input>
            </section>
        )
    }
}

export default listaCategorias;