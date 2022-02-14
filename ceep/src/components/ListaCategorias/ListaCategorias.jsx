import React, { Component } from "react";
import "./style.css"

class listaCategorias extends Component {

    render() {
        return(
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    <li 
                    className="lista-categorias_item">
                        Categorias
                    </li>
                </ul>
                <input type="text" className="lista-categorias_input"></input>
            </section>
        )
    }
}

export default listaCategorias;