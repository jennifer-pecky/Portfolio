import React from 'react';
import './App.scss';
import  {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path="/" component = {Hero} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
