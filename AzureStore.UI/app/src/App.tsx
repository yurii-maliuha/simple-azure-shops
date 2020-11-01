import React from 'react';
import Product from './containers/ProductContainer';
import OrderForm from './containers/OrderFormContainer';
import Basket from './containers/BasketContainer';
import './App.scss';
import { styled } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import HomeIcon from '@material-ui/icons/Home';
import AppBar from '@material-ui/core/AppBar/AppBar';
import Badge from '@material-ui/core/Badge/Badge';
import BasketBadge from './containers/BasketBadgeConteiner';

const StyledLink = styled(Link)({
  textDecoration: 'none',
  color: 'white'
});

function App() {
  return (
    <Router>
      <AppBar position="static" style={{padding:"15px", display:"flex", justifyContent: "flex-end", flexDirection: "row"}}>
        <StyledLink to="/basket" style={{margin:"0 10px"}}>
          <BasketBadge />
        </StyledLink>
        <StyledLink to="/" style={{margin:"0 10px"}}>
          <HomeIcon/>
        </StyledLink>
      </AppBar>
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
