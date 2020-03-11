import React from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom'
import logo from './logo.svg';
//import './App.css';
import Basic from '../src/form/detail-form';
import Introduction from '../src/intro/intro';
import Home from '../src/home/home';
import '../src/grid.less';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://img.smartspends.com/static/images/etmoneyweb/etmoneyLogo.svg" alt="ETMONEY Logo" />
      </header>
      <BrowserRouter>
        <Route path="/basic" component={Basic} />
        <Route path="/home" component={Home} />
        <Route path="/basic2" component={Introduction} />
      </BrowserRouter>
    </div>
  );
}

export default App;
