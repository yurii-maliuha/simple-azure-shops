import React from 'react'
import { Button, Card, CardMedia, CardActionArea, CardActions, CardContent, Typography } from '@material-ui/core';

interface Props {
    item: any;
}

export default class CatalogItem extends React.Component<Props> {
    render() {
        return (<Card style={{ height: '100%' }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={this.props.item.imageUrl}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {this.props.item.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>)
    }
}