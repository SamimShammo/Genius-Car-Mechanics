import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';
export const AuthProvider = createContext()
const AuthContext = (props) => {
    const {children} = props
    const allContext = useFirebase()
    return (
        <AuthProvider.Provider value={allContext}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthContext;