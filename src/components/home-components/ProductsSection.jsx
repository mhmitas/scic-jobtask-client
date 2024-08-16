import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import ProductCard from '../cards/ProductCard';
import { axiosInstance } from '../../hooks/useAxios';
import ProductsSectionHeader from './ProductsSectionHeader';

const ProductsSection = () => {
    const [sortBy, setSortBy] = useState("releaseDate")
    const [categoryBy, setCategoryBy] = useState("")
    const [searchText, setSearchText] = useState("")
    const [skip, setSkip] = useState(0)
    const [limit, setLimit] = useState(12)
    // get total products count
    const { data: totalProducts = 0, isLoading: isCounting, error: countingError, refetch: reCount } = useQuery({
        queryKey: [`total-products`, categoryBy, searchText],
        queryFn: async () => {
            const { data } = await axiosInstance(`/total-products?category=${categoryBy}&search=${searchText}`)
            console.log(data);
            return data
        }
    })
    const pages = [...Array(totalProducts).keys()]
    // get products
    const { data: products = [], isLoading, error, refetch } = useQuery({
        queryKey: [`products`, sortBy, categoryBy, searchText],
        queryFn: async () => {
            const { data } = await axiosInstance(`/products?category=${categoryBy}&sort=${sortBy}&search=${searchText}&limit=${limit}&skip=${skip}`)
            // console.log(data);
            return data
        }
    })

    if (countingError) console.error(countingError);

    return (
        <section className='mb-16 my-container'>
            <ProductsSectionHeader
                searchText={searchText}
                setSearchText={setSearchText}
                refetch={reCount}
                setSortBy={setSortBy}
                setCategoryBy={setCategoryBy}
            />
            {isCounting ?
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