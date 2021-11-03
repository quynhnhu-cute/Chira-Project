import React from 'react';
import { HomePage } from 'pages/User/home/HomePage';
import { UserPage } from 'pages/User/user/UserPage';
import { ContactPage } from 'pages/User/contact/ContactPage';
import { SupportPage } from 'pages/User/support/SupportPage';

export const userRoutes = [
    {
        path: '/',
        exact: true,
        component: HomePage,
    },
    {
        path: '/users',
        exact: false,
        component: UserPage,
    },
    {
        path: '/support',
        exact: false,
        component: SupportPage,
    },
    {
        path: '/contact',
        exact: false,
        component: ContactPage,
    },
]