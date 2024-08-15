import React, { useState } from 'react';
import Hero from '../../components/home-components/Hero';
import ProductsSection from '../../components/home-components/ProductsSection';

const Home = () => {

    return (
        <div className='min-h-screen'>
            <Hero />
            <ProductsSection />
        </div>
    );
};

export default Home;