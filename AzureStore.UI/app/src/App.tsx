import React from 'react';
import Product from './containers/ProductContainer';
import OrderForm from './containers/OrderFormContainer';
import Basket from './containers/BasketContainer';
import './App.scss';
import { Container, Grid } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/basket">
          <Basket />
        </Route>
        <Route path="/ordering">
          <OrderForm />
        </Route>
        <Route path="/catalog/:id">
          <Product></Product>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
