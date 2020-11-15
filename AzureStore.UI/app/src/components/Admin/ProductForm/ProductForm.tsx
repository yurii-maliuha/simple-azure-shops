import {
	Button,
	Container,
	FormControl,
	Grid,
	IconButton,
	InputAdornment,
	InputLabel,
	MenuItem,
	Select,
	styled,
	TextField,
} from "@material-ui/core";
import Input from "@material-ui/core/Input";
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { Carousel } from "react-responsive-carousel";
import Commodity from "../../../models/Commodity";
import { StyledBreadcrumbs } from "../../Shared/BreadcrumbWrapper";
import { StyledLink } from "../../Shared/LinkWrapper";
import Save from "@material-ui/icons/Save";
import Category from "../../../models/category";

interface Props {
	product: Commodity;
	categories: Map<number, Category>;
	putProduct: (product: Commodity) => void;

}

const FormInput = styled("div")({
	marginTop: "1rem",
});

const StyledDescription = styled("div")({
	height: "80%",
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-between",
});

const PriceRegex = new RegExp('^(\\d+\.?\\d{0,2})$');

export default class ProductForm extends React.Component<Props> {
	state = {
		product: this.props.product,
		priceInput: this.props.product.price.toString(),
	};

	priceInputChange = (event: any) => {
		if ((event.target.value as string).match(PriceRegex)) {
			this.setState({
				product: {
					...this.state.product,
					price: +event.target.value,
				},
				priceInput: event.target.value,
			});
		}
	};

	handleSave = () => {
		this.props.putProduct(this.state.product);
	}

	render() {
		const { product } = this.state;
		const images =
			product?.images === undefined
				? []
				: (product?.images as Array<any>)?.map((it) => {
					return (
						<div>
							<IconButton aria-label="delete">
								<DeleteIcon />
							</IconButton>
							<img src={it} />
						</div>
					);
				});
		const types = Array.from(this.props.categories.values()).map(it => {
			return <MenuItem
				value={it.id}>{it.name}
			</MenuItem>
		})
		return (
			<div>
				<StyledBreadcrumbs>
					<StyledLink to="/">Home</StyledLink>
					<h3>{product.name}</h3>
				</StyledBreadcrumbs>
				<Container>
					<Grid container spacing={3}>
						<Grid item xs={5}>
							<Carousel showThumbs>{images}</Carousel>
						</Grid>
						<Grid item xs={6} direction="column" justify="space-between">
							<StyledDescription>
								<div>
									<FormInput>
										<FormControl>
											<InputLabel>Type</InputLabel>
											<Select
												value={product.type}
												onChange={(event: any) => {
													this.setState({
														product: {
															...this.state.product,
															type: +event.target.value
														}
													})
												}}
											>
												{types}
											</Select>
										</FormControl>
									</FormInput>
									<FormInput>
										<TextField
											fullWidth
											label="Name"
											value={product.name}
											onChange={(event) => {
												this.setState({
													product: {
														...this.state.product,
														name: event.target.value,
													},
												});
											}}
										></TextField>
									</FormInput>
									<FormInput>
										<TextField
											fullWidth
											multiline
											label="Description"
											value={product.description}
											onChange={(event) => {
												this.setState({
													product: {
														...this.state.product,
														description: event.target.value,
													},
												});
											}}
										></TextField>
									</FormInput>
									<FormInput>
										<FormControl fullWidth>
											<InputLabel htmlFor="price-input">Price</InputLabel>
											<Input
												id="price-input"
												value={this.state.priceInput}
												inputProps={{
													step: 0.1,
												}}
												type="number"
												onChange={this.priceInputChange}
												startAdornment={
													<InputAdornment position="start">₴</InputAdornment>
												}
											/>
										</FormControl>
									</FormInput>
									<FormInput>
										<FormControl fullWidth>
											<InputLabel htmlFor="amount-input">Amount</InputLabel>
											<Input
												id="amount-input"
												value={this.state.product.amount}
												inputProps={{
													step: 1,
												}}
												type="number"
												onChange={(event: any) => {
													this.setState({
														product: {
															...this.state.product,
															amount: Math.round(+event.target.value)
														}
													})
												}}
											/>
										</FormControl>
									</FormInput>
								</div>
								<div>
									<Button
										color="primary"
										variant="contained"
										onClick={this.handleSave}
									>
										Save changes
										<Save style={{ marginLeft: "1rem" }} />
									</Button>
								</div>
							</StyledDescription>
						</Grid>
					</Grid>
				</Container>
			</div>
		);
	}
}
