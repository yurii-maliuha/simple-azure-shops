import { Breadcrumbs, Container, Link } from '@material-ui/core';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { useParams } from 'react-router-dom';
import Commodity from '../../models/Commodity';

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

        return (<Container>
            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href="/">
                    Home
                </Link>
                <Link
                    color="textPrimary"
                    href={"/catalog/" + this.props.commodity.id}
                    aria-current="page">
                    {this.props.commodity.name}
                </Link>
            </Breadcrumbs>
            <Carousel>
                {images}
            </Carousel>
        </Container>);
    }
}