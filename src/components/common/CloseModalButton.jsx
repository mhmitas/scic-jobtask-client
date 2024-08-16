import React from 'react';
import { GoX } from "react-icons/go";

const CloseModalButton = ({ setShowModal }) => {
    return <button
        onClick={() => setShowModal(false)}
        className='btn btn-sm btn-circle btn-ghost text-2xl absolute top-1 right-1 z-10'
    ><GoX /></button>
};

export default CloseModalButton;