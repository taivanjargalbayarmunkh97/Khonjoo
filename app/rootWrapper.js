'use client';
// context
import { AuthContext } from '@/context/auth/authContext';
import { Api } from '@/service/api';
import { NextUIProvider } from '@nextui-org/react';

export default function ParentWrapper({ children }) {
    const { authFunc, authState, authDispatch } = Api();
    return (
        <NextUIProvider>
            <AuthContext.Provider value={{ authFunc, authState, authDispatch }}>{children}</AuthContext.Provider>;
        </NextUIProvider>
    );
}
