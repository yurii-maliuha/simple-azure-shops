import { Breadcrumbs, Button, Container, Grid, Link, styled, Typography } from '@material-ui/core';
import React from 'react';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Carousel } from 'react-responsive-carousel';
import Commodity from '../../models/Commodity';

const StyledBreadcrumbs = styled(Breadcrumbs)({
    marginBottom: '4rem'
});

const StyledDescription = styled('div')({
    height: '80%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
});

const StyledActionContainer = styled('div')({
    display: 'flex',
    justifyContent: 'space-between'
});

interface Props {
    commodity: Commodity;
    match: any;
    getProduct: (id: number) => void;
}

export default class ProductDetails extends React.Component<Props> {

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getProduct(id);
    }

    componentDidUpdate() {
        console.log(this.props.commodity.name);
    }

    render() {
        const { commodity } = this.props;
        const images = commodity?.images === undefined ? [] : (this.props.commodity.images as Array<any>)
            .map(it => {
                return (<div>
                    <img src={it} />
                </div>)
            });
        const price = commodity.onSale ? (
            <Typography variant="h5">
                <s>{commodity.price}</s>
                <Typography color="error">
                    {commodity.salePrice} {commodity.currency}
                </Typography>
            </Typography>) :
            <Typography variant="h5">
                {commodity.price} {commodity.currency}
            </Typography>;

        return (<Container>
            <StyledBreadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href="/">
                    Home
                </Link>
                <Link
                    color="textPrimary"
                    href={"/catalog/" + commodity.id}
                    aria-current="page">
                    {commodity.name}
                </Link>
            </StyledBreadcrumbs>
            <Container>
                <Typography variant="h4">
                    {commodity.name}
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={5}>
                        <Carousel showThumbs>
                            {images}
                        </Carousel>
                    </Grid>
                    <Grid item xs={6} direction="column" justify="space-between">
                        <StyledDescription>
                            <div>
                                {commodity.description}
                            </div>
                            <StyledActionContainer>
                                {price}
                                <Button color="primary" variant="contained">
                                    Add to cart
                                    <AddShoppingCartIcon
                                        style={{ marginLeft: '1rem' }} />
                                </Button>
                            </StyledActionContainer>
                        </StyledDescription>
                    </Grid>
                </Grid>
            </Container>
        </Container>);
    }
}