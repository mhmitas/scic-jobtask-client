import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../layouts/root';
import Home from '../pages/home/Home';
import Login from '../pages/authentication/Login';
import Signup from '../pages/authentication/Signup';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ],
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/sign-up',
        element: <Signup />
    },
])

export default router;