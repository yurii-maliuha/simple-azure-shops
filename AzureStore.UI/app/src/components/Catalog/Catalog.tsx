import React from 'react';
import { Container, Grid } from '@material-ui/core';
import HeaderFilter from '../HeaderFilter';
import CatalogItem from '../Shared/CatalogItem';
import { SimpleSearchFilter } from '../../models/SimpleSearchFilter';

interface Props {
    getCatalog: () => void;
    filterCatalog: (price: SimpleSearchFilter) => void;
    catalogItems: Array<any>;
}

export default class Catalog extends React.Component<Props> {

    state = {
        maxPrice: 0
    };

    componentDidMount() {
        this.props.getCatalog();
    }

    componentDidUpdate() {
        const items = this.props.catalogItems;
        if (items.length > 0 && this.state.maxPrice === 0) {
            const max = Math.max.apply(Math, items.map(it => it.price));
            this.setState({ maxPrice: max });
        }
    }

    render() {
        const data = this.props.catalogItems ? this.props.catalogItems.map(item => {
            return <Grid item sm={6} md={4} lg={3}>
                <CatalogItem item={item}></CatalogItem>
            </Grid>
        }) : [];

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
