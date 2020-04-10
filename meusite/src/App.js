import React from 'react';

const Equipe = (props) => {
    return (
        <div>
            <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade} />
            <Social fb={props.facebook}/>
            <hr></hr>
        </div>
    )
}

const Sobre = (props) => {
    return (
        <div>
            <h2>Olá sou o {props.nome}</h2>
            <h3>Cargo: {props.cargo}</h3>
            <h3>Idade: {props.idade}</h3>
        </div>
    );
}

const Social = (props) => {
    return (
        <div>
            <a href={props.fb}>Facebook: </a>
            <a>Linkedin: </a>
            <a>Youtube: </a>
        </div>
    );
}

function App() {
    return (
        <div>
            <h1>Conheça nossa equipe</h1>
            <Equipe nome="Lucas" cargo="Programador" idade="29" 
                    facebook="facebook.com"/>
            <Equipe nome="Pedro" cargo="Designer" idade="35" 
                    facebook="facebook.com"/>
        </div>
    )
}

export default App;