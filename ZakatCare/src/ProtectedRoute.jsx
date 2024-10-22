// ProtectedRoute.js
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect } from "react";

export default function ProtectedRoute({ element: Component, ...rest }) {
    const isAuthenticated = localStorage.getItem("sessionID");

    useEffect(() => {
        if (!isAuthenticated) {
            toast.error("Please Login First");
        }
    }, [isAuthenticated]);

    return isAuthenticated ? (
        <Component {...rest} />
    ) : (
        <Navigate to="/zakatcare/login" replace />
    );
}
