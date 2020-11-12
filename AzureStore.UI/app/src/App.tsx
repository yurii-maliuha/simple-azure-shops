import React from "react";
import Product from "./containers/ProductContainer";
import Basket from "./containers/BasketContainer";
import "./App.scss";
import { styled } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import HomeIcon from "@material-ui/icons/Home";
import AppBar from "@material-ui/core/AppBar/AppBar";
import BasketBadge from "./containers/BasketBadgeConteiner";
import Checkout from "./containers/CheckoutConteiner";
import { StyledLink } from "./components/Shared/LinkWrapper";

const AppStyledLink = styled(StyledLink)({
	color: "white",
	margin: "0 10px",
});

const StyledAppBar = styled(AppBar)({
	padding: "15px",
	display: "flex",
	justifyContent: "flex-end",
	flexDirection: "row",
});

function App() {
	return (
		<Router>
			<StyledAppBar position="static">
        <AppStyledLink to="/basket">
					<BasketBadge />
        </AppStyledLink>
        <AppStyledLink to="/">
					<HomeIcon />
        </AppStyledLink>
			</StyledAppBar>
			<Switch>
				<Route path="/basket">
					<Basket />
				</Route>
				<Route path="/checkout">
					<Checkout />
				</Route>
				<Route path="/product/:id">
					<Product></Product>
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
