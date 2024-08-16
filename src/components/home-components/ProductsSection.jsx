import { useQuery } from '@tanstack/react-query';
import React, { useRef, useState } from 'react';
import ProductCard from '../cards/ProductCard';
import { axiosInstance } from '../../hooks/useAxios';
import ProductsSectionHeader from './ProductsSectionHeader';

const ProductsSection = () => {
    const topRef = useRef(null)
    const [sortBy, setSortBy] = useState("releaseDate")
    const [categoryBy, setCategoryBy] = useState("")
    const [searchText, setSearchText] = useState("")
    useState
    const [currentPage, setCurrentPage] = useState(0);
    const [limit, setLimit] = useState(8)
    const [skip, setSkip] = useState(0)
    const [pages, setPages] = useState([])

    // get total products count
    const { data: totalProducts = 0, isLoading: isCounting, error: countingError, refetch: reCount } = useQuery({
        queryKey: [`total-products`, categoryBy, searchText],
        queryFn: async () => {
            const { data } = await axiosInstance(`/total-products?category=${categoryBy}&search=${searchText}`)
            // console.log(data);
            const totalProducts = parseInt(data?.totalProducts) || 0;
            const totalPages = Math.ceil(totalProducts / limit)
            const pages = [...Array(totalPages).keys()]
            setPages(pages)
            return data?.totalProducts
        }
    })

    // ---------------------------------------
    // get products
    const { data: products = [], isLoading, error, refetch } = useQuery({
        queryKey: [`products`, sortBy, categoryBy, searchText, limit, skip, currentPage],
        queryFn: async () => {
            const { data } = await axiosInstance(`/products?category=${categoryBy}&sort=${sortBy}&search=${searchText}&limit=${limit}&skip=${skip}`)
            // console.log(data);
            return data
        }
    })

    function handleResetSkipAndCurrentPage() {
        setSkip(0)
        setCurrentPage(0)
    }

    if (error || countingError) console.error(countingError);

    return (
        <section className='mb-16 my-container'>
            <ProductsSectionHeader
                searchText={searchText}
                setSearchText={setSearchText}
                refetch={reCount}
                setSortBy={setSortBy}
                setCategoryBy={setCategoryBy}
                topRef={topRef}
                handleResetSkipAndCurrentPage={handleResetSkipAndCurrentPage}
            />
            {isLoading || isCounting ?
                <p className='mb-4'>Loading...</p> :
                <p className='mb-4'>Total Products: {totalProducts}</p>
            }
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8'>
                {products.map((product, index) => <ProductCard key={index} product={product} />)}
            </div>
            <div className={`flex ${pages.length === 0 && "hidden"}`}>
                <div className='flex flex-1 justify-center flex-wrap items-center gap-2'>
                    {/* handle previous */}
                    <button
                        onClick={() => {
                            if (currentPage === 0) {
                                return console.log("Previous page do not exits");
                            }
                            setCurrentPage(() => currentPage - 1)
                            setSkip((currentPage - 1) * limit)
                            topRef.current.scrollIntoView({ behavior: "smooth" })
                        }}
                        className={`btn btn-secondary btn-sm rounded ${currentPage === 0 && "hidden"}`}
                    >Previous</button>
                    {/* handle next */}
                    <button
                        onClick={() => {
                            if (currentPage === pages[pages.length - 1]) {
                                return console.log("Previous page do not exits");
                            }
                            setCurrentPage(() => currentPage + 1)
                            setSkip((currentPage + 1) * limit)
                            topRef.current.scrollIntoView({ behavior: "smooth" })
                        }}
                        className={`btn btn-secondary btn-sm rounded ${currentPage === pages[pages.length - 1] && "hidden"}`}
                    >Next</button>
                </div>
                <p>Page {currentPage + 1} of {pages.length}</p>
            </div>
        </section>
    );
};

export default ProductsSection;