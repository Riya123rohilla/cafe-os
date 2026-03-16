import React from 'react';
import { ownerRoutes } from './ownerRoutes';
import LandingPage from '../pages/LandingPage/LandingPage';
import AuthPage from '../pages/auth/AuthPage';
import OwnerDashboard from '../pages/dashboard/OwnerDashboard';
import AdminDashboard from '../pages/admin/AdminDashboard';
import CustomerInterface from '../pages/customer/CustomerInterface';

export const allRoutes = [
    ...ownerRoutes,
    { path: '/', element: <LandingPage /> },
    { path: '/signup', element: <AuthPage defaultMode="signup" /> },
    { path: '/auth', element: <AuthPage defaultMode="login" /> },
    { path: '/owner/dashboard', element: <OwnerDashboard onLogout={() => window.location.href = '/'} /> },
    { path: '/admin', element: <AdminDashboard onLogout={() => window.location.href = '/'} /> },
    { path: '/customer', element: <CustomerInterface /> },
];
