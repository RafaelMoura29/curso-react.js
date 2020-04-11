import React, { Component } from 'react';
import './estilos.css'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            numero: 0,
            botao: "iniciar"
        }
        this.timer = null
        this.limpar = this.limpar.bind(this)
        this.vai = this.vai.bind(this)
    }

    vai() {

        if (this.timer !== null) {
            clearInterval(this.timer)
            this.timer = null
            let state = this.state
            state.botao = "iniciar"
            this.setState(state)
        } else {
            this.timer = setInterval(() => {
                let state = this.state
                state.numero += 0.1
                state.botao = "pausar"
                this.setState(state)
            }, 100)
        }
    }

    limpar() {
        if (this.timer !== null) {
clearInterval(this.timer)            
this.timer = null
        }
        let state = this.state
        state.botao = "iniciar"
        state.numero = 0
        this.setState(state)
    }

    render() {
        return (
            <div className="container">
                <img alt="cronometro" src={require('./assets/cronometro.jpg')} className="img" />
                <p className="timer" href="#">{this.state.numero.toFixed(1)}</p>
                <div className="areaBtn">
                    <a className="botao" onClick={this.vai}>{this.state.botao}</a>
                    <a className="botao" onClick={this.limpar}>Limpar</a>
                </div>
            </div >
        )
    }
}

export default App;