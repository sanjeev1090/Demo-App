import React from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom'
import logo from './logo.svg';
//import './App.css';
import Basic from '../src/form/detail-form';
import Introduction from '../src/intro/intro'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>Hello World</div>
      </header>
      <BrowserRouter>
        <Route path="/basic" component={Basic} />
        <Route path="/basic2" component={Introduction} />
      </BrowserRouter>
    </div>
  );
}

export default App;
