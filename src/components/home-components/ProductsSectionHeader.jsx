import React from 'react';
import { FaSearch } from 'react-icons/fa';

const ProductsSectionHeader = ({ setSearchText, refetch, setSortBy, setCategoryBy, topRef, handleResetSkipAndCurrentPage }) => {

    function handleSearch(e) {
        e.preventDefault()
        const texts = e.target.search.value;
        if (texts.length < 3) {
            return;
        }
        setSearchText(texts)
        setSortBy("")
        handleResetSkipAndCurrentPage()
    }

    return (
        <header ref={topRef} className='max-w-3xl mx-auto space-y-4 mb-6'>
            <form onSubmit={handleSearch} className='form-controller join w-full'>
                <label className="input input-bordered flex items-center gap-2 join-item flex-1">
                    <FaSearch />
                    <input
                        onChange={(e) => {
                            if (e.target.value == 0) {
                                setSearchText("")
                                refetch()
                            }
                        }}
                        type="text"
                        className="grow"
                        name='search'
                        placeholder="Search"
                    />
                </label>
                <button type='submit' className='btn btn-primary join-item text-lg'><FaSearch /></button>
            </form>
            <div className='flex justify-end gap-4'>
                <div className='form-controller'>
                    <select
                        onChange={(e) => {
                            let category = e.target.value;
                            setCategoryBy(category)
                            handleResetSkipAndCurrentPage()
                        }}
                        defaultValue={"all"}
                        className='select select-bordered'>
                        <option className='hidden' >Category</option>
                        <option value="">All</option>
                        <option value="smartphone">iPhone</option>
                        <option value="tablet">iPad</option>
                        <option value="laptop">Mac</option>
                        <option value="watch">Watch</option>
                        <option value="airpods">AirPods</option>
                    </select>
                </div>
                <div className='form-controller'>
                    <select
                        onChange={(e) => {
                            let sort = e.target.value;
                            setSortBy(sort)
                        }}
                        className='select select-bordered'
                    >
                        <option className='hidden' value="all">Sort By</option>
                        <option value="releasedDate">Date Release</option>
                        <option value="priceLowToHigh">Price Low to High</option>
                        <option value="priceHighToLow">Price High to Low</option>
                    </select>
                </div>
            </div>
        </header>
    );
};

export default ProductsSectionHeader;


