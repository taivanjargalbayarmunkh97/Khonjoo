'use client';
// context
import { AuthContext } from '@/context/auth/authContext';
import { Api } from '@/service/api';
import { NextUIProvider } from '@nextui-org/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProgressBar from './Loading';

export default function ParentWrapper({ children }) {
    const { authFunc, authState, authDispatch } = Api();
    return (
        <NextUIProvider>
            <AuthContext.Provider value={{ authFunc, authState, authDispatch }}>
                <ProgressBar />
                {children}
                <ToastContainer />
            </AuthContext.Provider>
        </NextUIProvider>
    );
}
