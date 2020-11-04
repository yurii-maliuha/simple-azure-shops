import { Grid, Slider, TextField } from "@material-ui/core";
import React from "react";
import "./HeaderFilter.scss";
import { SimpleSearchFilter } from "../../models/SimpleSearchFilter";

interface State {
	filter: SimpleSearchFilter;
}

interface Props {
	maxPrice: number;
	filterProducts: (filter: SimpleSearchFilter) => void;
}

export default class HeaderFilter extends React.Component<Props, State> {
	state = {
		filter: {
			from: 0,
			to: 99999,
		} as SimpleSearchFilter,
	};

	handleSliderCommitChange = (event: any, newValue: number | number[]) => {
		this.props.filterProducts(this.state.filter);
	};

	handleSliderChange = (event: any, newValue: number | number[]) => {
		const values = newValue as number[];
		const filter = {
			...this.state.filter,
			from: values[0],
			to: values[1],
		};
		this.setState({
			filter,
		});
	};

	handleTextFromChange = (event: any) => {
		const value = event.target.value;
		const filter = {
			...this.state.filter,
			from: !value ? 0 : Number.parseInt(event.target.value),
		};
		this.setState({
			filter,
		});
	};

	handleTextToChange = (event: any) => {
		const value = event.target.value;
		const filter = {
			...this.state.filter,
			to: !value ? this.props.maxPrice : Number.parseInt(event.target.value),
		};
		this.setState({
			...this.state,
			filter,
		});
	};

	render() {
		return (
			<div className="app-simple-filter">
				<Grid container spacing={2}>
					<Grid item xs={5}>
						<Slider
							valueLabelDisplay="auto"
							max={this.props.maxPrice}
							onChange={this.handleSliderChange}
							onChangeCommitted={this.handleSliderCommitChange}
							value={[this.state.filter.from, this.state.filter.to]}
							aria-labelledby="range-slider"
						/>
					</Grid>
					<Grid item xs={2}>
						<TextField
							size="small"
							label="Min price"
							variant="outlined"
							onChange={this.handleTextFromChange}
							value={this.state.filter.from}
						/>
					</Grid>
					<Grid item xs={2}>
						<TextField
							size="small"
							label="Max price"
							variant="outlined"
							onChange={this.handleTextToChange}
							value={this.state.filter.to}
						/>
					</Grid>
				</Grid>
			</div>
		);
	}
}
