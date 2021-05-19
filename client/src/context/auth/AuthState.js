// 2 - Import React, the useReducer hook,  the context and the reducer.
import React, { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
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

    // Register User

    // Login User

    // Logout

    // Clear Errors
    
    // 8 - Return the Context Provider
    return (
        <AuthContext.Provider value={{
            // 9 - Add state values / Any actions that are created will be later added into this section
            token: state.token,
            isAuthenticated: state.isAuthenticated,
            loading: state.loading,
            user: state.user,
            error: state.error,
        }}>
            {props.children}
        </AuthContext.Provider>
    )
};

export default AuthState;