import React from 'react';

export const AuthContext = React.createContext({
    token: localStorage.getItem("authToken"),
    isAuthenticated: () => {
        if (localStorage.getItem("authToken")) {
            return true
        }
    },
});