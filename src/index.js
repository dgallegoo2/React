import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

//Sin JSX
// const root = document.getElementById('root');
////const elemento = React.createElement(componente, propiedades, hijos)
//const elemento = React.createElement("h1", {className: "saludo"}, "Hola Mundo!")

//Con JSX
const root = document.getElementById('root');

ReactDOM.render(<App/>,root);
