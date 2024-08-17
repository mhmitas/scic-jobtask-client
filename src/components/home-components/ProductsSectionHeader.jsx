import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import FilterProducts from '../modals/FilterProducts';
import { GoFilter } from 'react-icons/go';

const ProductsSectionHeader = ({
    setSearchText,
    refetch,
    setSortBy,
    setCategoryBy,
    categoryBy,
    setBrandBy,
    brandBy,
    topRef,
    resetSkipCPage,
    priceRange,
    setPriceRange
}) => {
    const [showFilterModal, setShowFilterModal] = useState(false);
    const [value, setValue] = useState([1, 3000]);

    function handleSearch(e) {
        e.preventDefault()
        const texts = e.target.search.value;
        if (texts.length < 3) {
            return;
        }
        setSearchText(texts)
        setSortBy("")
        resetSkipCPage()
    }

    return (
        <header ref={topRef} className='max-w-3xl mx-auto *:mb-4 mb-6'>
            {/* search form */}
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
                {/* Filter controller part */}
                <div className='form-controller'>
                    <button className='btn text-base'>Reset</button>
                </div>
                <div className='form-controller'>
                    <button onClick={() => setShowFilterModal(true)} className='btn text-base'>Filter<GoFilter className='text-xl' /></button>
                </div>
                {/* sort by controller */}
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
            {showFilterModal && <FilterProducts
                categoryBy={categoryBy}
                brandBy={brandBy}
                setCategoryBy={setCategoryBy}
                setBrandBy={setBrandBy}
                resetSkipCPage={resetSkipCPage}
                setShowModal={setShowFilterModal}
                value={value}
                setValue={setValue}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
            />}
        </header>
    );
};

export default ProductsSectionHeader;


