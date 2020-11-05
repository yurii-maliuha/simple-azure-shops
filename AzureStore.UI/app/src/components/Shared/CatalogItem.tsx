import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { Carousel } from "react-responsive-carousel";
import { StyledLink } from "../Shared/LinkWrapper";
import { Redirect } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.css";

interface Props {
	item: any;
}

export default class CatalogItem extends React.Component<Props> {
	render() {
		const images = (this.props.item.images as Array<any>).map((it) => {
			return (
				<StyledLink to={"/product/" + this.props.item.id}>
					<div>
						<img src={it} />
					</div>
				</StyledLink>
			);
		});
		return (
			<Card style={{ height: "100%" }}>
				<Carousel infiniteLoop={true} showIndicators={false} showThumbs={false}>
					{images}
				</Carousel>
				<CardContent>
					<StyledLink to={"/product/" + this.props.item.id}>
						<Typography variant="h6" component="p">
							{this.props.item.name}
						</Typography>
						<Typography variant="body2" color="textSecondary" component="p">
							{this.props.item.description}
						</Typography>
					</StyledLink>
				</CardContent>
			</Card>
		);
	}
}
