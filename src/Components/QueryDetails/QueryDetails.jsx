/* eslint-disable react/prop-types */
import { useLoaderData } from "react-router-dom";
import { FaCommentAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../Hooks/useAuth/useAuth";
import { toast } from "react-toastify";
import AllRecommendation from "./AllRecommendation";

const QueryDetails = () => {
    const [query, setQuery] = useState(useLoaderData());
    const queryId = query._id;
    const { auth, render1, setRender1 } = useAuth();
    const currentUser = auth.currentUser;
    // const [recommendation, setRecommendation] = useState(query.recommendations);    
    const [recommendations, setRecommendations] = useState([]);

    if (!query) {
        <div className="flex w-full items-center justify-center h-screen"><span className="loading loading-spinner loading-lg"></span></div>
    }

    const {
        _id,
        productImageURL,
        queryTitle,
        productName,
        productBrand,
        boycottingReason,
        datePosted,
        userName,
        userEmail,
        userImageUrl,
        recommendationCount,
        updateDatePosted
    } = query;

    useEffect(() => {
        // Fetch query details and associated recommendations
        const fetchQueryDetails = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/queries`);
                const fetchedQuery = response.data.find((q) => q._id === queryId);

                if (fetchedQuery) {
                    setQuery(fetchedQuery);
                    setRecommendations(fetchedQuery.recommendations || []);
                } else {
                    // Handle query not found
                    console.error("Query not found");
                }
            } catch (error) {
                console.error("Error fetching query details:", error);
            }
        };

        fetchQueryDetails();
    }, [queryId, render1]);

    const [formData, setFormData] = useState({
        recommendationTitle: "",
        recommendedProductName: "",
        recommendedProductImageURL: "",
        recommendationReason: "",
        recommendedUserEmail: `${currentUser?.email}`,
        recommendedUserName: `${currentUser?.displayName}`,
        recommendedUserImageUrl: `${currentUser?.photoURL}`,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const currentDate = new Date();

            // Set the timezone to Bangladesh (BD)
            const options = { timeZone: 'Asia/Dhaka' };
            const formattedDate = currentDate.toLocaleString('en-US', options);

            const queryData = {
                ...formData,
                timestamp: formattedDate,
            };

            const response = await axios.post(
                `${import.meta.env.VITE_API_URL}/queries/${_id}/recommendations`,
                queryData
            );

            console.log(response.data); // Handle success or error response
            toast.success('Recommendation added successfully!', { autoClose: 2000 });
            setRender1(!render1);

            // Reset form after successful submission
            setFormData({
                recommendationTitle: "",
                recommendedProductName: "",
                recommendedProductImageURL: "",
                recommendationReason: "",
                recommendedUserEmail: `${currentUser?.email}`,
                recommendedUserName: `${currentUser?.displayName}`,
                recommendedUserImageUrl: `${currentUser?.photoURL}`,
            });
        } catch (error) {
            console.error("Error adding recommendation:", error.message);
            toast.error('An error occurred while adding the recommendation. Please try again.');
        }
    };

    return (
        <div className="card lg:px-20 lg:py-8 recent-query-card bg-gradient-to-b from-orange via-slate-300 to-orange rounded-lg p-5 shadow-lg">
            <div data-aos="zoom-in" data-aos-duration="700" data-aos-anchor-placement="top-bottom" data-aos-delay="50" className="flex justify-between items-center mb-2">
                <div className='flex items-center'>
                    <div>
                        <img
                            src={userImageUrl}
                            alt={userName}
                            className="w-10 h-10 lg:w-14 lg:h-14 mr-2 rounded-full border-2 border-white"
                        />
                    </div>
                    <div>
                        <p className="text-sm lg:text-lg text-primary font-semibold">{userName}</p>
                        <p className="text-xs lg:text-base text-gray-600">{userEmail}</p>
                    </div>
                </div>
                {/* recommend */}
                <div className='tooltip tooltip-left tooltip-warning' data-tip="↓ Go below to Recommend Now ↓">
                    <a href="#Recommend" className="btn-xs border-2 flex justify-center items-center gap-1 py-4 lg:py-6 lg:px-12 bg-[#FF6347] hover:scale-105 border-[#FF6347] text-white rounded-full text-[14px] lg:text-lg px-8 shadow-xl transition-all duration-200 font-bold mt-0"><FaCommentAlt /> {recommendationCount}</a>
                </div>

            </div>
            <div data-aos="fade-up" data-aos-duration="700" data-aos-anchor-placement="top-bottom" data-aos-delay="50" className="card-body p-0 lg:my-2">
                <div className='my-4'>
                    <h3 className="text-lg md:text-2xl lg:text-5xl font-bold text-primary mb-1 lg:mb-4">{queryTitle}</h3>
                    <p className="text-sm lg:text-lg text-gray-800 mb-1 mt-2"><span className="font-semibold">Product Name:</span> {productName}</p>
                    <p className="text-sm lg:text-lg text-gray-800 mb-1"><span className="font-semibold">Brand:</span> {productBrand}</p>
                    <p className="text-sm lg:text-lg text-gray-800 break-words mb-1">
                        <span className="font-semibold">Alternation Reason:</span> {boycottingReason}
                    </p>
                    <p className="text-sm lg:text-lg text-gray-800 mb-1"><span className="font-semibold">Posted Date & Time:</span> {datePosted}</p>
                    {
                        updateDatePosted && <p className="text-sm lg:text-lg text-gray-800"><span className="font-semibold">Query Last Updated:</span> {updateDatePosted}</p>
                    }
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="700" data-aos-anchor-placement="top-bottom" data-aos-delay="50" className="relative w-full">
                <img
                    src={productImageURL}
                    alt={`Query Poduct ${productName} Image`}
                    className="w-full min-h-48 max-h-80 lg:max-h-96 object-contain rounded-md mt-6 mb-6 bg-base-300 border-2 border-orange bg-gradient-to-t from-gray-200 via-gray-300 to-transparent backdrop-blur-lg inset-0"
                />

                {/* Recommend button */}
                <div className='pt-12 md:pb-1 md:pt-16 w-full' id="Recommend">
                    <div className="flex gap-2 mb-1 justify-between w-full">
                        <button className="btn-xs animate-pulse hover:animate-none drop-shadow-2xl shadow-2xl flex text-lg w-full items-center bg-[#FF6347] hover:opacity-100 text-white hover:bg-[#FF6347] rounded-full py-8 lg:text-2xl lg:py-12 text-center justify-center px-4" onClick={() => document.getElementById('my_modal_3').showModal()}>
                            <FaCommentAlt className="mr-2" />Click here for Recommend box
                        </button>
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box bg-orange">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white font-extrabold text-xl">✕</button>
                                </form>
                                <div>
                                    <h2 className="text-center font-bold text-4xl mb-4 text-white">Add Recommendation</h2>
                                    <form onSubmit={handleSubmit}>
                                        <input
                                            type="text"
                                            name="recommendationTitle"
                                            placeholder="Recommendation Title"
                                            className="input input-bordered w-full mb-2"
                                            value={formData.recommendationTitle}
                                            onChange={handleChange}
                                            required
                                        />
                                        <input
                                            type="text"
                                            name="recommendedProductName"
                                            placeholder="Recommended Product Name"
                                            className="input input-bordered w-full mb-2"
                                            value={formData.recommendedProductName}
                                            onChange={handleChange}
                                            required
                                        />
                                        <input
                                            type="url"
                                            name="recommendedProductImageURL"
                                            placeholder="Recommended Product Image URL"
                                            className="input input-bordered w-full mb-2"
                                            value={formData.recommendedProductImageURL}
                                            onChange={handleChange}
                                            required
                                        />
                                        <textarea
                                            name="recommendationReason"
                                            placeholder="Recommendation Reason"
                                            className="textarea textarea-bordered w-full mb-2"
                                            value={formData.recommendationReason}
                                            onChange={handleChange}
                                            required
                                        ></textarea>
                                        {/* Hidden fields for user email and name */}
                                        <input
                                            type="hidden"
                                            name="userEmail"
                                            value={formData.userEmail}
                                        />
                                        <input
                                            type="hidden"
                                            name="userName"
                                            value={formData.userName}
                                        />
                                        <button
                                            className="btn btn-primary text-black bg-white border-white hover:bg-transparent hover:border-black shadow-2xl w-full mt-2"
                                            type="submit">Add Recommendation</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>

                {/* Render recommendations */}
                <h3 className="text-black text-xl font-bold mt-12 mb-4">Total Recommendations ({recommendations.length})</h3>

                <div className="recommendations-container bg-orange p-8 pb-1 text-white rounded-md drop-shadow-2xl">
                    {recommendations.map((recommendation, idx) => (
                        <AllRecommendation key={idx} recommendation={recommendation} idx={idx}></AllRecommendation>
                    ))}
                </div>



            </div>
        </div>
    );
};

export default QueryDetails;