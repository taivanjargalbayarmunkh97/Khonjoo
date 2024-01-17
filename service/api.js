import { useReducer, useMemo } from 'react';
import AuthReducer from '@/context/auth/authReducer';
import axios from 'axios';
import { setcookie, getcookie, removeCookie } from '@/context/auth/utils';

export const Api = () => {
    const initialState = {
        userToken: null,
        isLoggedIn: false,
        user: {},
        data: null,
    };
    const instance = axios.create({
        timeout: 30000,
    });

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    const handlers = useMemo(
        () => ({
            //хэрэглэгчийн нэвтрэх
            signIn: async (data) => {
                let payload = {
                    token: data?.token,
                    isLoggedIn: true,
                    user: data,
                };
                dispatch({ type: 'IS_LOGGED_IN', payload });
            },

            setUser: async (data) => {
                setcookie(data);
                dispatch({ type: 'SET_USER', payload: data });
            },

            //хэрэглэгч гарах
            logOut: () => {
                removeCookie();
                dispatch({ type: 'SIGN_OUT' });
            },
            stateDynamicUpdate: (obj) => {
                //   payload = {
                //    type:obj.type
                //    value:obj.value
                //  }
                dispatch({ type: 'DYNAMIC_UPDATE', payload: obj });
            },
            getTokenState: () => {
                return `Authorization : Bearer ${state.data?.token?.access_token}`;
            },
            GET: async (url, isToken = false, contentType = 'application/json', responseType = 'json') => {
                try {
                    let response = await instance.get(BASE_URL + url, {
                        headers: {
                            ...(isToken && getTokenState()),
                            'Content-Type': contentType,
                            'X-API-KEY': 'DUU4zmfTw27Xk1l5bMKgN5F7JXGxy7on',
                        },
                        responseType,
                    });
                    return response;
                } catch (e) {
                    if (e?.response?.status === 401) {
                        handlers.logOut();
                    }
                    return e;
                }
            },

            POST: async (url, isToken = false, data, contentType = 'application/json', responseType = 'json') => {
                try {
                    let response = await instance.post(BASE_URL + url, data, {
                        headers: {
                            'Content-Type': contentType,
                            'X-API-KEY': 'DUU4zmfTw27Xk1l5bMKgN5F7JXGxy7on',
                        },
                        responseType,
                    });

                    return response;
                } catch (e) {
                    if (e?.response?.status === 401) {
                        handlers.logOut();
                    }
                    return e?.response?.data;
                }
            },
        }),
        [state]
    );
    return { authFunc: handlers, authState: state, authDispatch: dispatch };
};
