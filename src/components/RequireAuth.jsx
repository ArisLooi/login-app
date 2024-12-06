import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';

export default function RequireAuth({ children }) {
    // Access the token from AuthContext
    const token = useContext(AuthContext).token;

    // If no token, redirect to login page
    if (!token) {
        return <Navigate to="/login" replace />
    }

    // If token exists, render the children components
    return children;
}