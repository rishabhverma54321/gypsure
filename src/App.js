
import './App.css';
import Header from './MyComponents/Header';
import {TodosList} from './MyComponents/TodosList'
import {TodosFooter} from './MyComponents/TodosFooter'
import React from "react";
import {ClientMain} from './MyComponents/Client/ClientMain'
import Products from './MyComponents/Product/Products'
import AboutUS from './MyComponents/AboutUs/AboutUs'
import { Gallary } from './MyComponents/Gallary/Gallary';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    
    <Router>
    <>
    <Header/>
    <Switch>
    <Route exact path="/products">
            <Products/>
          </Route>
          <Route path="/imggallary">
          <Gallary/>
          </Route>
          <Route path="/about">
            <AboutUS/>
          </Route>
          <Route path="/client">
          <ClientMain/>
          </Route>
          <Route  path="/">
          <TodosList/>
          </Route>
        </Switch>
    <TodosFooter/>
    </>
    </Router>
  );
}

export default App;
