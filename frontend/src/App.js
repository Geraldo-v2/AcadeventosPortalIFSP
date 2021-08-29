import React from 'react';
import Event from './components/Event';
import data from './data';
import './fonts/hero_regular.ttf'

function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a href="index.html">
            <img className="brand" src="/images/logo.png" />
          </a>
        </div>
        <div>
          <a className="signin" href="/signin">Entrar | Cadastrar</a>
        </div>
      </header>
      <main>
        <div className="row center">
          {
            data.events.map(event =>(
              <Event key={event._id} event={event}></Event>
            ))
          }
        </div>
      </main>
      <footer className="row center">Desenvolvido por Geraldo, suporte por Devsbey.com.br</footer>
    </div>
  );
}

export default App;
