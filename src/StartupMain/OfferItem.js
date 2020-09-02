import React from 'react'
import {Grid, Typography,Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(()=>({
    root:{
        padding:"35px 10px 25px 15px"
    },
    image:{
        width:"4rem",
        height:"4rem",
        display:"flex",
        margin:"0 auto",
    },
    title:{
        display:"flex",
        margin:"0 auto",
        justifyContent:"center",
        paddingTop:"5px",
        outline:'none !important',
         
    }

}))

function OfferItem({title,img,descript}) {
    const classes= useStyles();
    return (
        <Grid className={classes.root}>
            <img src={img} alt="test" className={classes.image}/>
            <Typography variant="body1" className={classes.title} style={{ fontWeight:"600"}}>{title}</Typography>
            <Typography variant="body2" className={classes.title} style={{ paddingBottom:"15px"}}>{descript}</Typography>
            <Button className={classes.title} color="primary" variant="outlined" >Read More</Button>
         </Grid>
    )
}

export default OfferItem
