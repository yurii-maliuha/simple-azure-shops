import React from 'react';
import { Container, Button, Grid, Card, CardMedia, CardActionArea, CardActions, CardContent, Typography } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';

interface Props {
    getCatalog: () => void;
    catalogItems: Array<any>;
}

export default class Catalog extends React.Component<Props> {

    componentDidMount() {
        this.props.getCatalog();
    }

    showFullDescription = (id: number) => {
        alert(id);
    }

    render() {
        const data = this.props.catalogItems.map(item => {
            return <Grid item sm={6} md={4} lg={3}>
                <Card style={{ height: '100%' }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image={item.imageUrl}
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {item.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Learn More
                    </Button>
                    </CardActions>
                </Card>
            </Grid>
        });
        return (
            <Container>
                <Grid container
                    spacing={3}
                    direction="row"
                    justify="space-between"
                    alignItems="stretch">
                    {data}
                </Grid>
            </Container>
        );
    }
}
