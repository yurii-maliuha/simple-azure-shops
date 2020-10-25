import React from 'react';
import { Container, Grid } from '@material-ui/core';
import CatalogItem from '../Shared/CatalogItem';

interface Props {
    getCatalog: () => void;
    catalogItems: Array<any>;
    onItemSelect: (item:any) => void;
}

export default class Catalog extends React.Component<Props> {

    componentDidMount() {
        this.props.getCatalog();

    }

    componentDidUpdate() {
        this.props.onItemSelect(this.props.catalogItems[0]);
        this.props.onItemSelect(this.props.catalogItems[1]);
    }

    showFullDescription = (id: number) => {
        alert(id);
    }

    render() {
        const data = this.props.catalogItems.map(item => {
            return <Grid item sm={6} md={4} lg={3}>
                <CatalogItem item={item}></CatalogItem>
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
