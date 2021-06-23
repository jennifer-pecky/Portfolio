import React from 'react';
import './App.scss';
import  {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Hero from './components/Hero/Hero';
import Skillset from './components/Skillset/Skillset';
import Header from './components/Header/Header';
import Frontend from './components/Skills/Frontend/Frontend';
import UiUx from './components/Skills/UiUx/UiUx';
import Wordpress from './components/Skills/Wordpress/Wordpress';

function App() {
  return (
    <div className="App">
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component = {Hero} />
        <Route path="/skillset" component = {Skillset} />
        <Route path ="/frontend" component = {Frontend} />
        <Route path ="/uiux" component = {UiUx} />
        <Route path ="/wordpress" component = {Wordpress} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
