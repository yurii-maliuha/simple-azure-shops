import React from 'react';
import Sidebar from '../../containers/SidebarContainer';
import MainContent from '../MainContent/MainContent';

import { Container, Grid } from '@material-ui/core';



export default class Home extends React.Component {
    render() {
        return (
          <Container style={{padding: "40px 20px"}}>
            <Grid container>
              <Grid item xs={2}>
                <Sidebar />
              </Grid>
              <Grid item xs>
                <MainContent></MainContent>
              </Grid>
            </Grid>
          </Container>
        );
    }
}