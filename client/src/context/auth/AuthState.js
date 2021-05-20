// 2 - Import React, the useReducer hook,  the context and the reducer.
import React, { useReducer, useCallback } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';
import setAuthToken from '../../utils/setAuthToken';
// 3 - Import the types
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS,
} from '../types';

// 4 - Initialize the state
const AuthState = props => {
    // 5 - Initialize initial state
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        user: null,
        error: null,
    };

    // 6 - Initialize the reducer in the initial state
    const [state, dispatch] = useReducer(authReducer, initialState);

    // 7 - Create the actions (methods) - At first we comment them, them we write the code.

    // Load User
    const loadUser = useCallback(async () => {
        setAuthToken(localStorage.token);

        try {
            const res = await axios.get('/api/auth');

            dispatch({
                type: USER_LOADED, 
                payload: res.data 
            });

        } catch (err) {
            dispatch({
                type: AUTH_ERROR,
            })
        }
    }, []);

    // Register User
    const register = async formData => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post('/api/users', formData, config);

            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            });

            loadUser();
        } catch (err) {
            dispatch({
                type: REGISTER_FAIL,
                payload: err.response.data.msg,
            });
        }
    }

    // Login User
    const login = async formData => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post('/api/auth', formData, config);

            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });

            loadUser();
        } catch (err) {
            dispatch({
                type: LOGIN_FAIL,
                payload: err.response.data.msg,
            });
        }
    }

    // Logout
    const logout = () => console.log('logout');

    // Clear Errors
    const clearErrors = () => dispatch({ type: CLEAR_ERRORS });
    
    // 8 - Return the Context Provider
    return (
        <AuthContext.Provider value={{
            // 9 - Add state values / Any actions that are created will be later added into this section
            token: state.token,
            isAuthenticated: state.isAuthenticated,
            loading: state.loading,
            user: state.user,
            error: state.error,
            register,
            loadUser,
            login,
            logout,
            clearErrors
        }}>
            {props.children}
        </AuthContext.Provider>
    )
};

export default AuthState;