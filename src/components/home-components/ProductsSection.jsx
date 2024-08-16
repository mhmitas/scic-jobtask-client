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
        queryKey: [`total-products`, categoryBy, searchText, limit],
        queryFn: async () => {
            const { data } = await axiosInstance(`/total-products?category=${categoryBy}&search=${searchText}`)
            // console.log(data);
            const totalProducts = parseInt(data?.totalProducts) || 0;
            const totalPages = Math.ceil(totalProducts / limit)
            const pages = [...Array(totalPages).keys()]
            setPages(pages)
            return totalProducts
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
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10'>
                {products.map((product, index) => <ProductCard key={index} product={product} />)}
            </div>
            <div className={`flex flex-col sm:flex-row gap-4 sm:gap-2 ${pages.length === 0 && "hidden"}`}>
                <div className='flex flex-1 justify-center items-center gap-2'>
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
                <div className='flex flex-col sm:flex-row gap-6 items-center'>
                    {/* show per page */}
                    <div className='flex items-center gap-1'>
                        <span>Show</span>
                        <select
                            onChange={(e) => {
                                const limit = parseInt(e.target.value)
                                setLimit(limit)
                                handleResetSkipAndCurrentPage()
                            }}
                            className='select select-bordered select-sm rounded'
                        >
                            <option value={8}>8</option>
                            <option value={12}>12</option>
                            <option value={20}>20</option>
                            <option value={40}>40</option>
                        </select>
                        <span>per page</span>
                    </div>
                    {/* jump to page */}
                    <div className='flex items-center gap-1'>
                        <span>Jump to page</span>
                        <select
                            onChange={(e) => {
                                const page = parseInt(e.target.value)
                                setCurrentPage(() => page)
                                setSkip((page) * limit)
                                topRef.current.scrollIntoView({ behavior: "smooth" })
                            }}
                            className='select select-bordered select-sm rounded'
                        >
                            {pages.map(page => <option
                                value={page}
                            >{page + 1}</option>)}
                        </select>
                    </div>
                    <p>Page {currentPage + 1} of {pages.length}</p>
                </div>
            </div>
        </section>
    );
};

export default ProductsSection;