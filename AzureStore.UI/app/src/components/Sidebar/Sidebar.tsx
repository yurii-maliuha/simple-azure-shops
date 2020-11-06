import React from "react";
import { MenuItem } from "@material-ui/core";
import Category from "../../models/category";
import { Link } from "react-router-dom";
import { StyledLink } from "../Shared/LinkWrapper";

interface Props {
	getCategories: () => void;
	selectCategory: (categoryId: number) => void;
	categories: Map<number, Category>;
}

export default class Sidebar extends React.Component<Props> {
	componentDidMount() {
		this.props.getCategories();
	}

	render() {
		const categories = Array.from(this.props.categories.values()).map(
			(item) => {
				return (
					<StyledLink to={item.name}>
						<MenuItem
							value={item.id}
							onClick={() => this.props.selectCategory(item.id)}
						>
							{item.name}
						</MenuItem>
					</StyledLink>
				);
			}
		);

		return <div>{categories}</div>;
	}
}
