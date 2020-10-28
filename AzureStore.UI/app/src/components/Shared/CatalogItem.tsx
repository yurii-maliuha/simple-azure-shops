import React from 'react'
import { Card, CardContent, Typography, styled } from '@material-ui/core';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)({
    textDecoration: 'none'
});

interface Props {
    item: any;
}

export default class CatalogItem extends React.Component<Props>{

    render() {
        const images = (this.props.item.images as Array<any>)
            .map(it => {
                return (<div>
                    <img src={it} />
                </div>)
            });
        return (
            <StyledLink to={"/catalog/" + this.props.item.id}>
                <Card style={{ height: '100%' }}>
                    <Carousel
                        infiniteLoop={true}
                        showIndicators={false}
                        showThumbs={false}>
                        {images}
                    </Carousel>
                    <CardContent>
                        <Typography variant="h6" component="p">
                            {this.props.item.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {this.props.item.description}
                        </Typography>
                    </CardContent>
                </Card>
            </StyledLink>)
    }
}