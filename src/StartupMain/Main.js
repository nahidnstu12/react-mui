import React from 'react'
import {Grid, Divider} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';
import Navbar from './Navbar';

function Main() {
    return (
        <Grid>
            <Header />
            <Navbar />
        </Grid>
      
    )
}

export default Main
