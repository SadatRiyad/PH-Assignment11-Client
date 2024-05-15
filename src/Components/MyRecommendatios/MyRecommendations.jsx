import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth/useAuth";
import axios from "axios";
import MyRecommendationsCard from "./MyRecommendationsCard";
// import "./MyRecommendations.css"
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";

const MyRecommendations = () => {
    const { user, render1 } = useAuth();
    const { email } = user;
    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/recommendations/myRecommendations/${email}`)
            .then(response => {
                setRecommendations(response.data);
            })
            .catch(error => {
                console.error('Error fetching recommendations:', error);
            });
    }, [email, render1]);
    console.log(recommendations)


    const handleDeleteRecommendation = async (id) => {
        try {
            const response = await axios.delete(`${import.meta.env.VITE_API_URL}/recommendations/${id}`);
            if (response.data.message) {
                toast.success("Recommendation deleted successfully.")
                setRecommendations((prevRecommendations) =>
                    prevRecommendations.filter((rec) => rec.id !== id)
                );
            }
        } catch (error) {
            console.error("Error deleting recommendation:", error);
        }
    };

    return (
        <div className="bg-base-300 mx-4 px-4 py-12 md:py-16">
            <Helmet>
                <title>My Recommendatuions | BB-QueryHub</title>
            </Helmet>
            <h1 className="text-center text-xl md:text-3xl mb-4 font-extrabold px-4">My Recommendations...</h1>
            <p className="text-center text-sm md:text-base mb-12 text-balance px-4">Manage your submitted recommendations and help improve product discovery for others.</p>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Query Product Image:</th>
                            <th>Query Title:</th>
                            <th>Query Product Name & Brand:</th>
                            <th className="justify-between flex items-center text-center">Alternate Image: <span className="mx-1"> Product Name: </span> Recommended By: <span className="mx-1">Timestamp: </span>Action:</th>
                        </tr>
                    </thead>
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
                </table>
            </div>
        </div>
    );
};

export default MyRecommendations;
