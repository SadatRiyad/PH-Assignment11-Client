import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth/useAuth";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import RecommendForMeQueryCard from "./RecommendForMeQueryCard";

const RecommendForMe = () => {
    const { user, render1 } = useAuth();
    const { email } = user;
    const [queries, setQueries] = useState([]);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/recommendations/recommendationsForMe/${email}`, { withCredentials: true })
            .then(response => {
                setQueries(response.data);
            })
            .catch(error => {
                console.error('Error fetching queries:', error);
            });
    }, [email, render1]);



    return (
        <div className="bg-base-300 mx-4 px-4 py-20">
            <Helmet>
                <title>Recommendation For Me | BB-QueryHub</title>
            </Helmet>
            <h1 className="text-center text-xl md:text-3xl mb-1 font-extrabold" data-aos="zoom-in" data-aos-duration="700" data-aos-anchor-placement="top-bottom" data-aos-delay="50">All the Recommendations for me...</h1>
            <p className="text-center text-sm md:text-base mb-12 text-balance px-4" data-aos="zoom-in" data-aos-duration="700" data-aos-anchor-placement="top-bottom" data-aos-delay="50">Explore recommendations from other users and find new products to try.</p>

            <div className="overflow-x-auto">
                <table className="table" data-aos="zoom-in" data-aos-duration="700" data-aos-anchor-placement="top-bottom" data-aos-delay="50">
                    <thead>
                        <tr>
                            <th>Query Post Image : </th>
                            <th>Query Product Name & Published Date & Time :  </th>
                            <th>Recommended Product Image & Recommender Details : <span className="mx-4">Recommended Product Name & Timestamp : </span> View Details Button : </th>
                        </tr>
                    </thead>
                    {
                        queries.length === 0 ? <tr><td colSpan="3" className="text-center text-xl md:text-2xl bg-slate-400 p-16 text-white">No Recommendations Found!</td></tr>
                            :
                            <tbody>
                                {
                                    queries.map((query, idx) => <RecommendForMeQueryCard
                                        key={idx}
                                        query={query}
                                        idx={idx}
                                    ></RecommendForMeQueryCard>)
                                }
                            </tbody>
                    }

                </table>
            </div>
        </div>
    );
};

export default RecommendForMe;