'use client';
// context
import { AuthContext } from '@/context/auth/authContext';
import { Api } from '@/service/api';

export default function ParentWrapper({ children }) {
    const { authFunc, authState, authDispatch } = Api();
    return <AuthContext.Provider value={{ authFunc, authState, authDispatch }}>{children}</AuthContext.Provider>;
}
