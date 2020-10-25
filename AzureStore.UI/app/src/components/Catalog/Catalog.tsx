import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import HeaderFilter from '../HeaderFilter';
import CatalogItem from '../Shared/CatalogItem';
import { SimpleSearchFilter } from '../../models/SimpleSearchFilter';
import SkeletonCatalogItem from '../Shared/SkeletonCatalogItem';

interface Props {
    getCatalog: () => void;
    filterCatalog: (price: SimpleSearchFilter) => void;
    catalogItems: Array<any>;
    catalogLoading: boolean;
    onItemSelect: (item:any) => void;
}

export default class Catalog extends React.Component<Props> {

    state = {
        maxPrice: 0
    };

    componentDidMount() {
        this.props.getCatalog();

    }

    componentDidUpdate() {
        this.props.onItemSelect(this.props.catalogItems[0]);
        this.props.onItemSelect(this.props.catalogItems[1]);
    }

    componentDidUpdate() {
        const items = this.props.catalogItems;
        if (items.length > 0 && this.state.maxPrice === 0) {
            const max = Math.max.apply(Math, items.map(it => it.price));
            this.setState({ maxPrice: max });
        }
    }

    mapGrid = () => {
        const data = this.props.catalogLoading
            ? new Array(10).fill(
                <Grid item sm={6} md={4} lg={3}>
                    <SkeletonCatalogItem></SkeletonCatalogItem>
                </Grid>)
            : this.props.catalogItems ? this.props.catalogItems.map(item => {
                return <Grid item sm={6} md={4} lg={3}>
                    <CatalogItem item={item}></CatalogItem>
                </Grid>
            }) : [];

        return data;
    }

    render() {

        const data = this.mapGrid();
        return (
            <Container>
                <HeaderFilter
                    maxPrice={this.state.maxPrice}
                    filterProducts={this.props.filterCatalog}></HeaderFilter>
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
