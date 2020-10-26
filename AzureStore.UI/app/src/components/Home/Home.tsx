import React from 'react';
import Sidebar from '../../containers/SidebarContainer';
import Catalog from '../../containers/CatalogContainer';

import { Container, Grid } from '@material-ui/core';
import { Link } from "react-router-dom";

export default class Home extends React.Component {
    render() {
        return (
            <Container>
            <Link to="/basket">Go to Basket</Link>
            <Grid container>
              <Grid item xs={2}>
                <Sidebar />
              </Grid>
              <Grid item xs>
                <Catalog></Catalog>
              </Grid>
            </Grid>
          </Container>
        );
    }
}