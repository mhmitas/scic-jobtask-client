import React from 'react';

const AuthenticationErrMessage = ({ text1 = "Wrong credentials", text2 = "Invalid username or password" }) => {
    return (
        <div className='min-h-4 bg-error bg-opacity-10 border-error border p-1 text-center relative'>
            {/* <span className='absolute top-1 left-1'><MdErrorOutline className='text-error' size={20} /></span> */}
            <p><strong>{text1}</strong></p>
            <p>{text2}</p>
        </div>
    );
};

export default AuthenticationErrMessage;