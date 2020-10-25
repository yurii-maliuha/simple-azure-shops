import React from 'react';
import logo from './logo.svg';
import Sidebar from './containers/SidebarContainer';
import Catalog from './containers/CatalogContainer';
import './App.scss';
import { Container, Grid } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <Container>
        <Grid container>
          <Grid item xs={2}>
            <Sidebar />
          </Grid>
          <Grid item xs>
            <Catalog></Catalog>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
