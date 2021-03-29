import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

var lock = true;
function inmutable(){
  const element =(
    <div>
      <h1>Prueba de inmutabilidad</h1>
      <h2>Este es un número aleatorio: {Math.random()}.</h2>
    </div>
  );
  const element2 =(
    <div>
      <h1>Prueba de inmutabilidad</h1>
      <h2>Este es un número aleatorio: {Math.random()}.</h2>
    </div>
  );
  if(lock){
    ReactDOM.render(element2, document.getElementById('root') );
    lock = false;
  }
  ReactDOM.render(element, document.getElementById('root') );
  
}
setInterval(inmutable,1000);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
