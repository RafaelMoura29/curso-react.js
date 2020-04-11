import React, { Component } from 'react';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }

    }


    render() {
        return (
            <div>
                <h3 Key={this.props.id}>
                    {this.props.username}
                </h3>
                <a>{this.props.curtidas} curtidas / {this.props.comentarios} comentarios</a>
                <hr/>
            </div>
        )
    }
}
export default App;


