import React, { useState } from 'react';
import './App.scss';
import  {useLocation, Switch, Route} from 'react-router-dom';
import Hero from './components/Hero/Hero';
import Skillset from './components/Skillset/Skillset';
import Header from './components/Header/Header';
import Frontend from './components/Skills/Frontend/Frontend';
import UiUx from './components/Skills/UiUx/UiUx';
import Wordpress from './components/Skills/Wordpress/Wordpress';
import About from './components/About/About';
import {AnimatePresence} from 'framer-motion';
import Preloader from './components/Preloader/Preloader';

function App() {
  const location = useLocation();

 const[loading, setLoading] = useState(true);

  return (
    <>
    {loading ? (
     <Preloader setLoading = {setLoading}/>
    )
    : (
      <div className="App">
      <Header />
      <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact component = {Hero} />
        <Route path="/skillset" component = {Skillset} />
        <Route path ="/frontend" component = {Frontend} />
        <Route path ="/uiux" component = {UiUx} />
        <Route path ="/wordpress" component = {Wordpress} />
        <Route path = "/about" component = {About} />
      </Switch>
      </AnimatePresence>
    </div>
    )
    }
    </>
  );
}

export default App;
