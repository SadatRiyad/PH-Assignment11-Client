import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import { BsInfoCircle } from "react-icons/bs";
import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Helmet } from "react-helmet-async";
import useAuth from "../Hooks/useAuth/useAuth";
import registerPic from "../../assets/aaa.png";

const Register = () => {
    const { registerUser, updateUserProfile, setRender, setUser, user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const redirect = location?.state || '/';
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const onSubmit = (data) => {
        const { name, email, photoURL, password } = data;

        registerUser(email, password)
            .then(() => {
                updateUserProfile(name, photoURL)
                    .then(() => {
                        setRender(true);
                        setUser({ ...user, displayName: name, photoURL: photoURL })
                        toast("Registration successful, you will be redirected to the home page shortly!", { type: "success", autoClose: 2000 });
                        setTimeout(() => {
                            navigate(redirect);
                        }, 3000)
                    });
            }).catch(() => {
                toast.error('Email already in use, please try another email', { autoClose: 2000 });
                reset();
            });
    };

    return (
        <div className="hero p-0 md:px-20 lg:px-12 lg:py-12 min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500">
            <Helmet>
                <title>Register | BB-QueryHub</title>
            </Helmet>
            <div className="flex hero-content flex-col-reverse lg:flex-row lg:justify-around p-0 lg:py-0 lg:pr-4 bg-secondary lg:rounded-xl drop-shadow-2xl lg:w-3/4 w-full">
                <div className="md:w-3/4 w-5/6 lg:w-2/4 py-8 justify-around lg:ml-8">
                    <div data-aos="fade-up" data-aos-duration="700" data-aos-anchor-placement="top-bottom" data-aos-delay="50" className="card lg:mr-6 px-2 ml-0 bg-white shrink-0 w-full shadow-2xl">
                        <div className="flex justify-center w-full mt-8">
                            <div>
                                <h5 className="text-orange font-bold text-4xl font-Rajdhani">Register Here</h5>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body px-6 pb-0">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: "Please input your name",
                                        },
                                    })}
                                    type="text"
                                    placeholder="Your full name"
                                    className="input input-bordered bg-white text-primary"
                                />
                                {errors?.name && (
                                    <span className="text-red text-sm mt-1 items-center flex">
                                        <BsInfoCircle className="mr-1 font-bold" />
                                        {errors?.name?.message}
                                    </span>
                                )}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: "Please enter your email",
                                        },
                                        pattern: {
                                            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,9}$/,
                                            message: "Invalid email format",
                                        },
                                    })}
                                    type="email"
                                    placeholder="Your email"
                                    className="input input-bordered bg-white text-primary"
                                />
                                {errors?.email && (
                                    <span className="text-red text-sm mt-1 items-center flex">
                                        <BsInfoCircle className="mr-1 font-bold" />
                                        {errors?.email?.message}
                                    </span>
                                )}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input
                                    {...register("photoURL", {
                                        required: {
                                            value: true,
                                            message: "Please enter a photo URL",
                                        },
                                    })}
                                    type="text"
                                    placeholder="Your photo URL"
                                    className="input input-bordered bg-white text-primary"
                                />
                                {errors?.photoURL && (
                                    <span className="text-red text-sm mt-1 items-center flex">
                                        <BsInfoCircle className="mr-1 font-bold" />
                                        {errors?.photoURL?.message}
                                    </span>
                                )}
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
                                })} type={passwordVisible ? 'text' : 'password'} placeholder="your password" className="input input-bordered bg-white text-primary pr-10" />
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
                            <div className="items-center flex mt-1">
                                <input
                                    {...register("checkbox", {
                                        required: {
                                            value: true,
                                            message: "Checkbox must be checked",
                                        },
                                    })}
                                    type="checkbox"
                                    className="checkbox bg-white border-[1.4px] checked:border-none checked:bg-orange border-dotted border-orange checkbox-xs mr-1"
                                />
                                <label htmlFor="terms" className="text-xs text-tertiary">
                                    I agree to the{" "}
                                    <Link to="#" className="text-orange underline">
                                        terms and conditions!
                                    </Link>
                                </label>
                                {errors?.checkbox && (
                                    <span className="text-red text-xs mt-1 flex items-center">
                                        <BsInfoCircle className="mr-1 text-orange font-bold text-base" />
                                        {errors?.checkbox?.message}
                                    </span>
                                )}
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-orange hover:bg-transparent border-orange hover:border-orange text-white hover:text-orange w-full transition-all duration-200 font-bold shadow-2xl">
                                    Register
                                </button>
                            </div>
                            <div className="mt-1 mb-8">
                                <p className="text-xs md:text-sm">
                                    Already have an account?{" "}
                                    <Link to="/login" className="text-orange underline font-semibold">
                                        Login here
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="700" data-aos-anchor-placement="top-bottom" data-aos-delay="50" className="text-center lg:text-left text-white lg:ml-8">
                    <div className="px-4 lg:pl-0"><img className="mx-auto mt-4 mb-8 border-2" src={registerPic} alt="Register" /></div>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                        Welcome to <br />
                        <span className="text-orange font-extrabold">BB-QueryHub</span> Registration...
                    </h1>
                    <p className="py-6 text-base text-balance px-8 lg:px-0 lg:pr-4">Join the BB-QueryHub community and start exploring alternative products! <br />
                        Create an account to unlock exclusive features and access premium content. <br />
                        Once registered, you will be able to browse our listings and more. <br /> If you have any questions or need assistance, feel free to <a className="font-bold text-orange underline" href="/contactUs">contact</a> our support team.
                    </p>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;