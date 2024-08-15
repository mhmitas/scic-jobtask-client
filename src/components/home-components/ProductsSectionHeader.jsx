import React from 'react';
import { FaSearch } from 'react-icons/fa';

const ProductsSectionHeader = ({ setSearchText, refetch }) => {

    function handleSearch(e) {
        e.preventDefault()
        const texts = e.target.search.value;
        if (texts.length < 3) {
            return;
        }
        setSearchText(texts)
    }

    return (
        <header className='max-w-3xl mx-auto space-y-4 mb-6'>
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
                    <select defaultValue={"all"} className='select select-bordered'>
                        <option value="all">All</option>
                        <option value="iphone">iPhone</option>
                        <option value="iPad">iPad</option>
                        <option value="Mac">Mac</option>
                        <option value="Watch">Watch</option>
                        <option value="AirPods">AirPods</option>
                    </select>
                </div>
                <div className='form-controller'>
                    <select className='select select-bordered'>
                        <option className='hidden' value="all">Sort By</option>
                        <option value="all">Date Release</option>
                        <option value="all">Price Low to High</option>
                        <option value="all">Price High to Low</option>
                    </select>
                </div>
            </div>
        </header>
    );
};

export default ProductsSectionHeader;


