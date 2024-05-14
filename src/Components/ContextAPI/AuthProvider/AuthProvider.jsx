import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import app from "../../FirebaseConfig/FirebaseConfig";

// export the AuthContext so that other components can use it
export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [render, setRender] = useState(false);
    const [data, setData] = useState([]);
    const [render1, setRender1] = useState(false);
    // google auth provider
    const googleProvider = new GoogleAuthProvider();
    // facebook auth provider
    const facebookProvider = new FacebookAuthProvider();

    // loading 
    if (loading) {
        <div className="flex w-full items-center justify-center h-screen"><span className="loading loading-spinner loading-lg"></span></div>
    }

    // sign in with google
    const handleSignInWithGoogle = async () => {
        try {
            setLoading(true);
            await signInWithPopup(auth, googleProvider)
                .then((result) => {
                    const user = result.user;
                    setUser(user);
                });
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoading(false);
        }
    };

    // sign in with facebook
    const handleSignInWithFacebook = async () => {
        try {
            setLoading(true);
            await signInWithPopup(auth, facebookProvider)
                .then((result) => {
                    const user = result.user;
                    setUser(user);
                });
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoading(false);
        }
    };

    // register new user
    const registerUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // update user profile
    const updateUserProfile = (name, photoURL) => {

        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL
        })
    }

    // log in existing user
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    // log out user
    const logoutUser = () => {
        return signOut(auth)
    }

    // observe the user auth state changes
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });
        return () => unSubscribe();
    }, [render, auth]);
// 
    // useEffet for loading api
    useEffect(() => {
        const unData = fetch(`${import.meta.env.VITE_API_URL}/queries`)
            .then(res => res.json())
            .then(data => {
                setData(data);
                // console.log(data);
            })
            .catch(err => console.log(err))
        return () => unData;
    }, [render1, setRender1])

    // value to be provided to the children components in the AuthContext
    const authInfo = {
        auth,
        data,
        user,
        setUser,
        setRender1,
        render1,
        setRender,
        registerUser,
        loginUser,
        logoutUser,
        updateUserProfile,
        loading,
        setLoading,
        handleSignInWithGoogle,
        handleSignInWithFacebook
    }
    // console.log(authInfo)

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;



AuthProvider.propTypes = {
    children: PropTypes.object.isRequired
}