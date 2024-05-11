/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth/useAuth";

const LoginRoute = ({ children }) => {
    const { user } = useAuth;
    const location = useLocation();

    if (!user) {
        setInterval(() => {
            <div className="flex w-full items-center justify-center h-screen"><span className="loading loading-spinner loading-lg"></span></div>
        }, 2000);

        if (user) {
            return <Navigate to="/login" state={{ from: location.pathname || "/" }} />;
        }
    }

    return (
        <>
            {children}
        </>
    );
};

export default LoginRoute;