import React, { useState } from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';
import { GoogleAuthProvider } from 'firebase/auth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const ProviderSignIn = () => {
    const { providerSignIn } = useAuth()
    const googleProvider = new GoogleAuthProvider()
    const [processing, setProcessing] = useState(false)
    const navigate = useNavigate()

    async function handleSignIn(provider) {
        setProcessing(true)
        try {
            const { user } = await providerSignIn(provider)
            console.log(user);
            toast.success('Sign in success')
            setProcessing(false)
            navigate('/')
        } catch (err) {
            console.error(err);
            toast.error(err.message?.slice(10))
            setProcessing(false)
        }
    }

    return (
        <div className='flex flex-col gap-2'>
            <button onClick={() => handleSignIn(googleProvider)} disabled={processing} type='button' className='btn'>
                <FaGoogle size={26} />Google
            </button>
            <button disabled={processing} type='button' className='btn'>
                <FaFacebook size={26} />Facebook
            </button>
        </div>
    );
};

export default ProviderSignIn;