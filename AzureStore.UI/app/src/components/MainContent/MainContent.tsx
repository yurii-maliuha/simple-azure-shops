import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Catalog from "../../containers/CatalogContainer";
import Product from "../../containers/ProductContainer";

export default class MainContent extends React.Component {
	render() {
		return (
			<Switch>
				<Route path="/:category?">
					<Catalog></Catalog>
				</Route>
			</Switch>
		);
	}
}
