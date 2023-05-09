import React from 'react';
import { arquivoRota } from './arquivoRota';
import {Switch, Route, Link} from 'react-router-dom';

export function App() {
  return (
      <>
    <header>
      <h1>Início</h1>
      <p><Link to='/arquivoRota'>arquivoRota</Link></p>
    </header>
    <main>
        <Switch>
          <Route path='/arquivoRota' component= {arquivoRota}/>
        </Switch>
    </main></>
  );
}

export default App;
