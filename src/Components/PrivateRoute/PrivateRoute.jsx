/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth/useAuth";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
 
    if (!user) {
        if (loading) {
            return <div className="flex w-full items-center justify-center h-screen"><span className="loading loading-spinner loading-lg"></span></div>
        }
        return <Navigate to="/login" state={{ from: location.pathname || "/" }} />;
    }

    return (
        <>
            {children}
        </>
    );
};

export default PrivateRoute;