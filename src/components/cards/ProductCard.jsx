import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="card card-compact shadow bg-base-200 rounded-lg">
            <figure className=''>
                <img src={`https://placehold.co/250X320/gray/white?font=lato&text=${product?.productName}`} alt="" className='rounded' />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;