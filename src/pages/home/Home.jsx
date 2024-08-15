import React, { useState } from 'react';
import Hero from '../../components/home-components/Hero';
import ProductsSectionHeader from '../../components/home-components/ProductsSectionHeader';
import ProductsSection from '../../components/home-components/ProductsSection';

const Home = () => {
    return (
        <div className='min-h-screen'>
            <Hero />
            <ProductsSectionHeader />
            <ProductsSection />
        </div>
    );
};

export default Home;