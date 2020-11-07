import { Grid, Slider, TextField } from "@material-ui/core";
import React from "react";
import "./HeaderFilter.scss";
import { SimpleSearchFilter } from "../../models/SimpleSearchFilter";

interface State {
	range: { from: number; to: number };
}

interface Props {
	maxPrice: number;
	filterChanged: (filter: { from: number; to: number }) => void;
}

export default class HeaderFilter extends React.Component<Props, State> {
	state = {
		range: {
			from: 0,
			to: 0,
		},
		default: 0,
	};

	handleSliderCommitChange = (event: any, newValue: number | number[]) => {
		this.props.filterChanged(this.state.range);
	};

	handleSliderChange = (event: any, newValue: number | number[]) => {
		const values = newValue as number[];
		const range = {
			from: values[0],
			to: values[1],
		};
		this.setState({
			range,
		});
	};

	handleTextFromChange = (event: any) => {
		const value = event.target.value;
		const range = {
			...this.state.range,
			from: !value ? 0 : Number.parseInt(event.target.value),
		};
		this.setState({
			range,
		});
	};

	handleTextToChange = (event: any) => {
		const value = event.target.value;
		const range = {
			...this.state.range,
			to: !value ? this.props.maxPrice : Number.parseInt(event.target.value),
		};
		this.setState({
			...this.state,
			range,
		});
	};

	render() {
		const { range } = this.state;
		const valueFrom = range.from;
		const valueTo =
			range.to === this.state.default ? this.props.maxPrice : range.to;
		const value = [valueFrom, valueTo];

		return (
			<div className="app-simple-filter">
				<Grid container spacing={2}>
					<Grid item xs={5}>
						<Slider
							valueLabelDisplay="auto"
							max={this.props.maxPrice}
							onChange={this.handleSliderChange}
							onChangeCommitted={this.handleSliderCommitChange}
							value={value}
							aria-labelledby="range-slider"
						/>
					</Grid>
					<Grid item xs={2}>
						<TextField
							size="small"
							label="Min price"
							variant="outlined"
							onChange={this.handleTextFromChange}
							value={valueFrom}
						/>
					</Grid>
					<Grid item xs={2}>
						<TextField
							size="small"
							label="Max price"
							variant="outlined"
							onChange={this.handleTextToChange}
							value={valueTo}
						/>
					</Grid>
				</Grid>
			</div>
		);
	}
}
