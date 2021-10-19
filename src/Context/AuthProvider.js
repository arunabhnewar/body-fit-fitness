import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';
import usePrograms from '../Hooks/usePrograms';


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const allContext = useFirebase();
    const programs = usePrograms();
    const data = {
        allContext,
        programs
    }
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
