import './App.css';
//import routes and our components
import React from 'react';
import { Route, Switch } from "react-router-dom";
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  // URL should have YOUR HEROKU URL for your backend, make sure you include the trailing slash
  const URL = "http://localhost:4000/";


  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projects">
          <Projects URL={URL} />
        </Route>
        <Route path="/about">
          <About URL={URL} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
