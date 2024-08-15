import React from 'react';

const ProductCard = ({ product }) => {
    const { productName, description, price, ratings, _d, category } = product;

    return (
        <div className="card card-compact shadow bg-base-200 rounded-lg">
            <figure className='bg-black'>
                <img src={`https://placehold.co/250X150/gray/white?font=lato&text=${product?.productName}`} alt={productName} className='rounded w-full' />
            </figure>
            <div className="card-body">
                <div className=''>
                    <h1 className="card-title pb-0">{productName}</h1>
                    <h1 className='line-clamp-2'>{description}</h1>
                    <p className='text-lg text-info font-semibold'>${price}</p>
                </div>
                <div className="card-actions justify-end mt-auto">
                    <button className="btn btn-primary btn-sm rounded">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;