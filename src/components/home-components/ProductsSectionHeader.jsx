import React from 'react';
import { FaSearch } from 'react-icons/fa';

const ProductsSectionHeader = () => {
    return (
        <header className='max-w-3xl mx-auto space-y-4 my-container mb-8'>
            <div className='form-controller join w-full'>
                <label className="input input-bordered flex items-center gap-2 join-item flex-1">
                    <FaSearch />
                    <input type="text" className="grow" placeholder="Search" />
                </label>
                <button className='btn btn-primary join-item text-lg'><FaSearch /></button>
            </div>
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


