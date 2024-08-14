import React, { useState } from 'react';
import Hero from './home-components/Hero';
import ProductsSectionHeader from './home-components/ProductsSectionHeader';

const Home = () => {
    return (
        <div className='min-h-screen'>
            <Hero />
            <ProductsSectionHeader />
        </div>
    );
};

export default Home;