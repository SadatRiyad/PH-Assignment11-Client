import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import { FaFacebook } from "react-icons/fa6";
import { AiFillGoogleCircle, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import useAuth from "../Hooks/useAuth/useAuth";


const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const redirect = location?.state?.from ? location.state.from : '/';
    const [passwordVisible, setPasswordVisible] = useState(false);
    const { loginUser, handleSignInWithGoogle, handleSignInWithFacebook } = useAuth();

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    // handleSignInWithGoogle 
    const SignInWithGoogle = () => {
        handleSignInWithGoogle()
            .then(() => {
                toast("Login Successfully!", { type: "success", autoClose: 2000 });
                setTimeout(() => {
                    navigate(redirect);
                }, 3000)
            })
            .catch(() => {
                toast("Invalid login credentials.", { type: "error", autoClose: 2000 })
                reset();
            })
    };

    // handleSignInWithFacebook
    const SignInWithFacebook = () => {
        handleSignInWithFacebook()
            .then(() => {
                // toast("Facebook Login Successfully!", { type: "success", autoClose: 2000 });
                // setTimeout(() => {
                //     navigate("/");
                // }, 3000);
            })
            .catch(() => {
                toast("Invalid login credentials.", { type: "error", autoClose: 2000 })
                reset();
            })
    }


    const onSubmit = (data) => {
        // console.log(data);
        const { email, password } = data;
        loginUser(email, password)

            .then(() => {
                toast("Login Successfully!", { type: "success", autoClose: 2000 });
                setTimeout(() => {
                    navigate(redirect);
                }, 3000)
            })
            .catch(() => {
                toast("Invalid login credentials. Please check your email and password.", { type: "error", autoClose: 2000 })
                reset();
            })
    };

    return (
        <div className="hero card-body px-0 md:px-12 min-h-screen bg-red">
            <Helmet>
                <title>Login | BB-QueryHub</title>
            </Helmet>
            <div className="flex hero-content flex-col justify-around px-2 lg:flex-row">
                <div data-aos="fade-right" data-aos-duration="700" data-aos-anchor-placement="top-bottom" data-aos-delay="50" className="text-center lg:text-left text-white lg:ml-8">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">Welcome to <span className="text-blue font-extrabold">BB-Artistry</span> Login...</h1>
                    <p className="py-6 md:text-md text-xs md:text-sm lg:text-base px-3 md:px-24 lg:px-0">
                        Please login to access your account. <br />
                        If you have any questions or need assistance, feel free to contact our support team.

                    </p>
                </div>
                <div className="md:w-2/4 justify-around lg:ml-8">
                    <div data-aos="fade-left" data-aos-duration="700" data-aos-anchor-placement="top-bottom" data-aos-delay="50" className="card bg-white shrink-0 w-full shadow-2xl">
                        <div className="flex justify-center w-full mt-8">
                            <div>
                                <h5 className="text-blue font-bold text-4xl font-Rajdhani">Login Here</h5>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body px-6 md:px-8 pb-0">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Please enter your email"
                                    }, pattern: {
                                        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,9}$/,
                                        message: "Invalid email format"
                                    }
                                })} type="email" placeholder="your email" className="input input-bordered" />
                                {errors?.email && <span className="text-red text-sm mt-1 items-center flex"><BsInfoCircle className="mr-1 font-bold" />{errors?.email?.message}</span>}
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is required"
                                    }, minLength: {
                                        value: 6,
                                        message: "Minimum length of 6 characters"
                                    }, validate: {
                                        uppercase: value => value === value.toLowerCase() ? "Password must contain at least one uppercase letter" : undefined,
                                        lowercase: value => value === value.toUpperCase() ? "Password must contain at least one lowercase letter" : undefined
                                    }
                                })} type={passwordVisible ? 'text' : 'password'} placeholder="your password" className="input input-bordered pr-10" />
                                {errors?.password && <span className="text-red text-sm mt-1 items-center flex"><BsInfoCircle className="mr-1 font-bold" />{errors?.password?.message}</span>}
                                <button
                                    type="button"
                                    className="absolute inset-y-0 top-8 right-0 flex items-center px-3"
                                    onClick={togglePasswordVisibility}
                                >
                                    {passwordVisible ?
                                        <AiOutlineEye size={20} />
                                        :
                                        <AiOutlineEyeInvisible size={20} />
                                    }
                                </button>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-blue hover:bg-transparent border-blue text-white hover:text-blue hover:border-blue w-full transition-all duration-200 font-bold shadow-2xl">Login</button>
                            </div>
                            <div className="mt-1">
                                <p className="text-xs md:text-sm">New user? <Link to="/register" className="text-blue underline font-semibold">Register here</Link></p>
                            </div>
                            <div className="divider text-tertiary font-semibold">or continue with</div>

                        </form>
                        <div className="grid grid-cols-2 gap-4 mb-2 px-6 md:px-8 pb-7">
                            <div className="mt-0">
                                <button onClick={() => SignInWithGoogle()} className="btn bg-[#EA4335] hover:bg-transparent border-[#EA4335] text-white hover:text-[#EA4335] hover:border-[#EA4335] w-full transition-all duration-200 font-bold shadow-2xl"><AiFillGoogleCircle />Google</button>
                            </div>
                            <div className="mt-0">
                                <button onClick={() => SignInWithFacebook()} className="btn bg-[#1877F2] hover:bg-transparent border-[#1877F2] text-white hover:text-[#1877F2] hover:border-[#1877F2] w-full transition-all duration-200 font-bold shadow-2xl"><FaFacebook /> Facebook</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;