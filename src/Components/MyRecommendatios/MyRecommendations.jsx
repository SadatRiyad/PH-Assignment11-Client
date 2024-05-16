import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth/useAuth";
import MyRecommendationsCard from "./MyRecommendationsCard";
// import "./MyRecommendations.css"
import { Helmet } from "react-helmet-async";
// import { toast } from "react-toastify";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure/useAxiosSecure";

const MyRecommendations = () => {
    const axiosSecure = useAxiosSecure();
    const { user, render1, setRender1 } = useAuth();
    const { email } = user;
    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
        axiosSecure.get(`/recommendations/myRecommendations/${email}`)
            .then(response => {
                setRecommendations(response.data);
            })
            .catch(error => {
                console.error('Error fetching recommendations:', error);
            });
    }, [axiosSecure, email, render1]);
    // console.log(recommendations)


    const handleDeleteRecommendation = async (id) => {
        Swal.fire({
            title: "Are you Sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            background: "orange",
            iconColor: "white",
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
            color: "black",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/recommendations/${id}`)
                    .then(res => {
                        if (res.data) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Recommendation deleted successfully.",
                                icon: "success",
                                background: "green",
                                iconColor: "white",
                                confirmButtonColor: "#d33",
                                color: "white",
                            });
                            setTimeout(() => {
                                setRender1(!render1);
                            }, 500)
                        }
                    }
                    )
            }
        });
    };

    return (
        <div className="bg-base-300 mx-4 px-4 py-12 md:py-16">
            <Helmet>
                <title>My Recommendatuions | BB-QueryHub</title>
            </Helmet>
            <h1 className="text-center text-xl md:text-3xl mb-4 font-extrabold px-4" data-aos="zoom-in" data-aos-duration="700" data-aos-anchor-placement="top-bottom" data-aos-delay="50">My Recommendations...</h1>
            <p className="text-center text-sm md:text-base mb-12 text-balance px-4" data-aos="zoom-in" data-aos-duration="700" data-aos-anchor-placement="top-bottom" data-aos-delay="50">Manage your submitted recommendations and help improve product discovery for others.</p>

            <div className="overflow-x-auto">
                <table className="table" data-aos="zoom-in" data-aos-duration="700" data-aos-anchor-placement="top-bottom" data-aos-delay="50">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Query Product Image:</th>
                            <th>Query Title:</th>
                            <th>Query Product Name & Brand:</th>
                            <th className="justify-between flex items-center text-center">Alternate Image: <span className="mx-1"> Product Name: </span> Recommended By: <span className="mx-1">Timestamp: </span>Action:</th>
                        </tr>
                    </thead>
                    {
                        recommendations.length === 0 ? <tr><td colSpan="4" className="text-center text-xl md:text-2xl bg-slate-400 p-16 text-white">No Recommendations Found!</td></tr>
                            :
                            <tbody>
                                {
                                    recommendations.map((rec, idx) => (
                                        <MyRecommendationsCard
                                            key={idx}
                                            recommendation={rec}
                                            onDelete={handleDeleteRecommendation}
                                        />
                                    ))
                                }
                            </tbody>
                    }
                </table>
            </div>
        </div>
    );
};

export default MyRecommendations;
