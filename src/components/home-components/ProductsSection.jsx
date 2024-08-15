import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import ProductCard from '../cards/ProductCard';
import { axiosInstance } from '../../hooks/useAxios';
import ProductsSectionHeader from './ProductsSectionHeader';

const ProductsSection = () => {
    const [searchText, setSearchText] = useState("")

    const { data: products = [], isLoading, error, refetch } = useQuery({
        queryKey: [`products`, searchText],
        queryFn: async () => {
            const { data } = await axiosInstance(`/products?search=${searchText}`)
            // console.log(data);
            return data
        }
    })

    if (error) console.error(error);

    return (
        <section className='mb-16 my-container'>
            <ProductsSectionHeader searchText={searchText} setSearchText={setSearchText} refetch={refetch} />
            {isLoading ?
                <p className='mb-4'>Loading...</p> :
                <p className='mb-4'>Total Products: {products?.length}</p>
            }
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                {products.map((product, index) => <ProductCard key={index} product={product} />)}
            </div>
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