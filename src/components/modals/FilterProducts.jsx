import React, { useRef, useState } from 'react';
import CloseModalButton from '../common/CloseModalButton';
import Slider from '@mui/material/Slider';


const FilterProducts = ({ setCategoryBy, resetSkipCPage, setShowModal }) => {
    const [value, setValue] = useState([1, 3000]);
    const [priceRange, setPriceRange] = useState([0, 3000]);
    const priceRef = useRef([0, 3000]);
    // console.log({ priceRange });


    return (
        <section className='modal modal-open'>
            <div className='modal-box relative'>
                <div className='mb-4'>
                    <select
                        onChange={(e) => {
                            let category = e.target.value;
                            setCategoryBy(category)
                            resetSkipCPage()
                            setShowModal(false)
                        }}
                        defaultValue={"all"}
                        className='select select-bordered'>
                        <option className='hidden' >Select Category</option>
                        <option value="">All</option>
                        <option value="smartphone">Smart Phone</option>
                        <option value="tablet">iPad</option>
                        <option value="laptop">Laptop</option>
                        <option value="smartwatch">Watch</option>
                        <option value="airpods">AirPods</option>
                    </select>
                </div>
                <div className='p-4 bg-base-200 rounded-lg'>
                    <div className='mb-10 flex items-center gap-2'>
                        <p className='text-xl font-semibold'>Price</p>
                        <button className='btn btn-sm btn-primary rounded'>Apply</button>
                    </div>
                    <MinimumDistanceSlider value={value} setValue={setValue} />
                </div>
                <CloseModalButton setShowModal={setShowModal} />
            </div>
        </section>
    );
};

export default FilterProducts;



function valuetext(value) {
    return `${value}°C`;
}

const minDistance = 10;

function MinimumDistanceSlider({ value, setValue }) {

    const handleChange = (event, newValue, activeThumb) => {

        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
        } else {
            setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
        }
    };

    return (
        <div>
            <Slider
                getAriaLabel={() => 'Minimum distance'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="on"
                getAriaValueText={valuetext}
                disableSwap
                min={1}
                max={3000}
            />
        </div>
    );
}


/* 
function handleOverlayClick(e) {
    if (e.target === e.currentTarget) {
        setShowModal(false)
    }
}
*/