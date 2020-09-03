import React,{useState,useEffect} from 'react'
import {Grid} from '@material-ui/core';
import Header from './Header';
import Navbar from './Navbar';
import Offer from './Offer';
import {offerings} from '../data';
import FeatureList from './FeatureList';
import ProductPage from './ProductPage';
import SkillsPage from './SkillsPage';

function Main() {
    const [product,setProduct] = useState([]);
    const [offer,setOffer] = useState([]);
    const [feature,setFeature] = useState([]);

    useEffect(() => {
        const handleOffer = () =>{
            const res = offerings.filter(item => item.feature || item.offer)
            .slice(1)
             setOffer(res);
         }
         const handleFeature = () =>{
            const res = offerings.filter(item => item.feature )
             setFeature(res);
         }

         setProduct(offerings);
         handleOffer();
         handleFeature();
    }, [])
    return (
        <Grid >
            <Header />
            <Navbar />
            <Offer feature={offer}/>
            <FeatureList feature={feature}/>
            <ProductPage product={product} />
            <SkillsPage />
        </Grid>
      
    )
}

export default Main
