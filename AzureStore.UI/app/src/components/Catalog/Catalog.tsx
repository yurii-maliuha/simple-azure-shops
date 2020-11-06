import React from "react";
import { Container, Grid, styled } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import HeaderFilter from "../HeaderFilter";
import CatalogItem from "../Shared/CatalogItem";
import { SimpleSearchFilter } from "../../models/SimpleSearchFilter";
import SkeletonCatalogItem from "../Shared/SkeletonCatalogItem";
import Commodity from "../../models/Commodity";
import Page from "../../models/Page";

const PaginationContainer = styled("div")({
	margin: "2rem 0",
	display: "flex",
	justifyContent: "center",
});

interface Props {
	getCatalog: (page: number) => void;
	filterCatalog: (price: SimpleSearchFilter) => void;
	catalogItems: Page<Commodity>;
	catalogLoading: boolean;
	category?: number; // TODO: check if we need it somewhere else
	match: any;
}

export default class Catalog extends React.Component<Props> {
	state = {
		maxPrice: 0,
		page: 1,
		range: {
			to: 99999,
			from: 0,
		},
	};
	itemSelected = false;

	componentDidMount() {
		this.props.filterCatalog(this.getFilter());
	}

	componentDidUpdate(prevProps: Props, prevState: any) {
		const items = this.props.catalogItems.data;
		if (items?.length > 0 && this.state.maxPrice === 0) {
			const max = Math.max.apply(
				Math,
				items.map((it) => it.price)
			);
			this.setState({ maxPrice: max });
		}

		if (
			prevProps.category !== this.props.category ||
			prevState.range !== this.state.range ||
			prevState.page !== this.state.page
		) {
			this.props.filterCatalog(this.getFilter());
		}
	}

	getFilter = () => {
		return {
			to: this.state.range.to,
			from: this.state.range.from,
			commodityType: this.props.category,
			page: this.state.page,
		} as SimpleSearchFilter;
	};

	mapGrid = () => {
		const data = this.props.catalogLoading
			? new Array(10).fill(
					<Grid item sm={6} md={4} lg={3}>
						<SkeletonCatalogItem></SkeletonCatalogItem>
					</Grid>
			  )
			: this.props.catalogItems?.data
			? this.props.catalogItems.data.map((item) => {
					return (
						<Grid item sm={6} md={4} lg={3}>
							<CatalogItem item={item}></CatalogItem>
						</Grid>
					);
			  })
			: [];

		return data;
	};

	handlePageChanges = (event: any, value: number) => {
		this.setState({ page: value });
		this.props.getCatalog(value);
	};

	handlePriceRangeChanged = (range: { from: number; to: number }) => {
		this.setState({
			range,
		});
	};

	render() {
		const data = this.mapGrid();
		return (
			<Container>
				<HeaderFilter
					maxPrice={this.state.maxPrice}
					filterChanged={this.handlePriceRangeChanged}
				></HeaderFilter>
				<Grid
					container
					spacing={3}
					direction="row"
					justify="space-between"
					alignItems="stretch"
				>
					{data}
				</Grid>
				<PaginationContainer>
					<Pagination
						defaultPage={1}
						count={this.props.catalogItems.totalPages}
						siblingCount={1}
						onChange={this.handlePageChanges}
					/>
				</PaginationContainer>
			</Container>
		);
	}
}
