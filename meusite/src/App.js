import React, { Component } from 'react';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nome: 'Matheus',
            contador: 0
        }
        this.aumentar = this.aumentar.bind(this)
        this.diminuir = this.diminuir.bind(this)
    }

    aumentar(){
        let state = this.state
        state.contador +=1;
        this.setState(state)
    }

    diminuir(){
        let state = this.state
        if(state.contador !== 0)
            state.contador -=1;
        else    
            alert("chegou a zero")
        this.setState(state)
    }

    render() {
        return (
            <div>
                <h3>
                    <button onClick={this.diminuir}>-</button>
                    {this.state.contador}
                    <button onClick={this.aumentar}>+</button>
                </h3>
            </div>
        )
    }
}
export default App;