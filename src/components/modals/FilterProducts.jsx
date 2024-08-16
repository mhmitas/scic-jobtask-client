import React from 'react';
import CloseModalButton from '../common/CloseModalButton';

const FilterProducts = ({ setCategoryBy, handleResetSkipAndCurrentPage, setShowModal }) => {

    function handleOverlayClick(e) {
        if (e.target === e.currentTarget) {
            setShowModal(false)
        }
    }

    return (
        <section onClick={handleOverlayClick} className='modal modal-open'>
            <div className='modal-box relative'>
                <div>
                    <select
                        onChange={(e) => {
                            let category = e.target.value;
                            setCategoryBy(category)
                            handleResetSkipAndCurrentPage()
                            setShowModal(false)
                        }}
                        defaultValue={"all"}
                        className='select select-bordered'>
                        <option className='hidden' >Select Category</option>
                        <option value="">All</option>
                        <option value="smartphone">iPhone</option>
                        <option value="tablet">iPad</option>
                        <option value="laptop">Mac</option>
                        <option value="watch">Watch</option>
                        <option value="airpods">AirPods</option>
                    </select>
                </div>
                <div>

                </div>
                <CloseModalButton setShowModal={setShowModal} />
            </div>
        </section>
    );
};

export default FilterProducts;