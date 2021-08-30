import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import EventScreen from './screens/EventScreen';
import './fonts/hero_regular.ttf'

function App() {
  return (
    <BrowserRouter>
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
          <Route path="/event/:id" component={EventScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer className="row center">Desenvolvido por Geraldo, suporte por Devsbey.com.br</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
