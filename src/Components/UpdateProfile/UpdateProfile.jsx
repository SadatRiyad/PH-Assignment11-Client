import { useForm } from "react-hook-form"
import { BsInfoCircle } from "react-icons/bs";
import { useContext } from "react";
import { toast, ToastContainer } from 'react-toastify';
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../ContextAPI/AuthProvider/AuthProvider";

const UpdateProfile = () => {
    const { updateUserProfile, setRender, setUser, auth, user, loading } = useContext(AuthContext);
    const currentUser = auth.currentUser;
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: currentUser?.displayName ? currentUser.displayName : '',
            photoURL: currentUser?.photoURL ? currentUser.photoURL : '',
            email: currentUser?.email ? currentUser.email : ''
        }
    });

    if (!user) {
        if (loading) {
            return <div className="flex w-full items-center justify-center h-screen"><span className="loading loading-spinner loading-lg"></span></div>
        }
    }


    const onSubmit = (data) => {
        const { name, photoURL } = data;
        // console.log(user.displayName)
        updateUserProfile(name, photoURL)
            .then(() => {
                setRender(true);
                setUser({ ...user, displayName: name, photoURL })
                toast("Update successful", { type: "success", autoClose: 2000 });
            })
            .catch(() => {
                toast("Error updating profile! Please try again", { type: "error", autoClose: 2000 });
            });
    };

    return (
        <div className="hero card-body px-0 md:px-12 min-h-screen bg-red">
            <Helmet>
                <title>Update Profile | BB-RealEstate</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row">
                <div data-aos="zoom-in" data-aos-duration="700" data-aos-anchor-placement="top-bottom" data-aos-delay="50" className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="flex justify-center w-full mt-8">
                        <div>
                            <h5 className="text-blue font-bold text-4xl">User Profile</h5>
                        </div>
                    </div>
                    <div className="w-full flex justify-center mt-4">
                        <div className="w-36 h-fit rounded-full bg-blue p-1 text-white">
                            <img className="rounded-full w-fit" alt="user pic" src={currentUser?.photoURL ? currentUser.photoURL : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Your Name:</span>
                            </label>
                            <input type="text" placeholder={currentUser?.displayName} disabled className="ml-1 bg-transparent input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Your Email:</span>
                            </label>
                            <input type="email" placeholder={currentUser?.email} className="ml-1 bg-transparent input-bordered" disabled />
                        </div>
                        <div className="form-control hidden">
                            <label className="label">
                                <span className="label-text font-semibold">Your PhotoURL</span>
                            </label>
                            <input type="text" placeholder={currentUser?.photoURL} disabled className="ml-1 bg-transparent input-bordered " />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Your PhotoURL:</span>
                            </label>
                            <input type="text" placeholder={currentUser?.photoURL} disabled className="ml-1 bg-transparent input-bordered" />
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in" data-aos-duration="700" data-aos-anchor-placement="top-bottom" data-aos-delay="50" className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="flex justify-center w-full mt-8">
                        <div>
                            <h5 className="text-blue font-bold text-4xl">Update Profile</h5>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input {...register("name", {
                                required: {
                                    value: true,
                                    message: "Please input your name"
                                }
                            })} type="text" placeholder="your full name" className="input input-bordered" />
                            {errors?.name && <span className="text-red text-sm mt-1 items-center flex"><BsInfoCircle className="mr-1 font-bold" />{errors?.name?.message}</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your PhotoURL</span>
                            </label>
                            <input {...register("photoURL", {
                                required: {
                                    value: true,
                                    message: "Please enter a photo URL"
                                }
                            })} type="text" placeholder="your photoURL" className="input input-bordered" />
                            {errors?.photoURL && <span className="text-red text-sm mt-1 items-center flex"><BsInfoCircle className="mr-1 font-bold" />{errors?.photoURL?.message}</span>}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-blue hover:bg-transparent border-blue text-white hover:text-blue hover:border-blue w-full transition-all duration-200 font-bold shadow-2xl">Update</button>
                        </div>

                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default UpdateProfile;