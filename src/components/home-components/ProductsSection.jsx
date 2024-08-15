import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductCard from '../cards/ProductCard';

const ProductsSection = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get("/products.json")
            .then(({ data }) => setProducts(data))
            .catch(err => console.error(err))
    }, [])


    return (
        <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-container mb-16'>
            {products.map((product, index) => <ProductCard key={index} product={product} />)}
        </section>
    );
};

export default ProductsSection;

/* 
const { data: products = [], isLoading, error, refetch } = useQuery({
    queryKey: [`products`],
    queryFn: async () => {
        const { data } = axios("/products.json")
        console.log(data);
        return data
    }
})

if (error) console.error(error);
*/