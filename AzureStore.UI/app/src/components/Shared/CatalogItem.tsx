import React from 'react'
import { Button, Card, CardMedia, CardActionArea, CardActions, CardContent, Typography, Paper, CardHeader } from '@material-ui/core';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css';

interface Props {
    item: any;
}

export default class CatalogItem extends React.Component<Props> {
    render() {
        const images = (this.props.item.images as Array<any>)
            .map(it => {
                return (<div>
                    <img src={it} />
                </div>)
            });
        return (<Card style={{ height: '100%' }}>
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
        </Card>)
    }
}