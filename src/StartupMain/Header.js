import React from 'react'
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import DragHandleIcon from '@material-ui/icons/DragHandle';

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: '450px',
        fontFamily: `'Raleway', sans-serif`,
    },
    image: {
        backgroundImage: `linear-gradient(rgba(138,138,138,.6),rgba(138,138,138,.9)),url("./img/header-bg.jpg")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100%',
        height: '450px',
        position: 'absolute',

    },
    headerTitle: {
        position: 'relative',
        top: '110px',
        display:'block',
        textAlign:'center'
    },
    headerTitle3: {
        padding: `0.5rem`,
        background: 'rgb(52,58,64)',
        color: 'rgb(248,249,250)',
        borderRadius: '0.25rem',
        width: '39%',
        marginLeft: '32%',
        marginTop:'9px'

    },
    downIcon: {
        color: '#4615b2',
        marginTop: '35px',
        transform: 'rotate(90deg)',
        cursor:"pointer"
    }


}))
function Header() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <span className={classes.image} />
            <Grid className={classes.headerTitle}>
                <Typography variant="subtitle1" style={{ fontWeight: '100' }}>WHAT ARE YOU WAITING FOR?</Typography>
                
                <Typography variant="h4" style={{ fontWeight: '700' }}>LET'S BE CREATIVE</Typography>

                <Typography component="div" variant="title" className={classes.headerTitle3} style={{ fontWeight: '300' }}>Startup, NEXT GENERATION & HIGHLY FLEXIBLE WORDPRESS THEME</Typography>

                <Typography component="div" variant="h6"  style={{ color: '#FFEB3B', fontWeight: '500' }}  >
                    <DragHandleIcon style={{ color: '#b2102f' }} />
                    <DragHandleIcon /> Start Doing That <DragHandleIcon />
                    {/* <LinearScaleIcon /> Start Doing That <LinearScaleIcon /> */}
                    <DragHandleIcon style={{ color: '#b2102f' }} />
                </Typography>

                <DoubleArrowIcon className={classes.downIcon} style={{ fontSize: '65' }} />
            </Grid>


        </div>
    )
}

export default Header
