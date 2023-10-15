import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import CardCountries from '../components/CardCountries';
import Benin from '../components/Benin';
import Author from '../components/Author';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
           <Navbar/>
           <Header/> 
           <CardCountries/>
           <Benin/>
           <Author/>
           <Footer/>
        </>
    );
};

export default Home;