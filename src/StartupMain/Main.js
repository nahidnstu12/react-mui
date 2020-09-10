import React,{useState,useEffect} from 'react'
import {Grid} from '@material-ui/core';
import Header from './Header';
import Navbar from './Navbar';
import Offer from './Offer';
import {offerings,sampleWorks,teammates} from '../data';
import FeatureList from './FeatureList';
import ProductPage from './ProductPage';
import SkillsPage from './SkillsPage';
import SampleProject from './SampleProject';
import TeamMembers from './TeamMembers';
import Pricings from './Pricings';
import Contacts from './Contacts';

function Main() {
    const [product,setProduct] = useState([]);
    const [offer,setOffer] = useState([]);
    const [feature,setFeature] = useState([]);
    const [sample,setSample] = useState([]);
    const [members,setMembers] = useState([]);

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
         setMembers(teammates)
         setSample(sampleWorks);
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
            <SampleProject working={sample}/>
            <TeamMembers members={members}/>
            <Pricings />
            <Contacts />
        </Grid>
      
    )
}

export default Main
