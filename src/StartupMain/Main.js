import React,{useState,useEffect} from 'react'
import {Grid} from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';
import Navbar from './Navbar';
import Offer from './Offer';
import {offerings} from '../data';

function Main() {
    const [offer,setOffer] = useState([]);

    
    // handleOffer();
    useEffect(() => {
        const handleOffer = () =>{
            const res = offerings.filter(item => item.feature || item.offer)
            .slice(1)
            // console.log(res);
             setOffer(res);
         }
         handleOffer();
    }, [])
    return (
        <Grid >
            <Header />
            <Navbar />
            <Offer feature={offer}/>
        </Grid>
      
    )
}

export default Main
