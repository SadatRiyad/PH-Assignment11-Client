import { useContext } from "react";
import { AuthContext } from "../../ContextAPI/AuthProvider/AuthProvider";

const useAuth = () => {
    const authState = useContext(AuthContext)
    return authState;
};

export default useAuth;