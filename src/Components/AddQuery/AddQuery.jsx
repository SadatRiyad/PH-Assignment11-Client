import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ToastContainer, toast } from 'react-toastify';
import useAuth from '../Hooks/useAuth/useAuth';
import axios from 'axios';

const AddQuery = () => {
    const { auth } = useAuth();
    const currentUser = auth.currentUser;
    // console.log(currentUser)

    const [formData, setFormData] = useState({
        productName: '',
        productBrand: '',
        productImageURL: '',
        queryTitle: '',
        boycottingReason: '',
        userEmail: `${currentUser?.email}`,
        userName: `${currentUser?.displayName}`,
        userImageUrl: `${currentUser?.photoURL}`,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
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
                datePosted: formattedDate,
                recommendationCount: 0 // Initial recommendation count
            };

            // Send a POST request to your server to add the query
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/queries/addQuery`, queryData);
            console.log('Query added successfully:', response.data);

            if (response.data.acknowledged == true) {
                toast.success('Query added successfully!', { autoClose: 2000 });
                setFormData({
                    productName: '',
                    productBrand: '',
                    productImageURL: '',
                    queryTitle: '',
                    boycottingReason: '',
                    userEmail: `${currentUser?.email}`,
                    userName: `${currentUser?.displayName}`,
                    userImageUrl: `${currentUser?.photoURL}`,
                });
            } else {
                toast.error('Failed to add query. Please try again.');
            }
        } catch (error) {
            console.error('Error adding query:', error.message);
            toast.error('An error occurred while adding the query. Please try again.');
        }
    };

    return (
        <div className="hero card-body px-4 md:px-12 min-h-screen" style={{ background: 'radial-gradient(circle, #ffa500,#ffa500,#ffd700,#ffa500, #ffa500)' }}>
            <Helmet>
                <title>Add Query | BB-QueryHub</title>
            </Helmet>
            <div className="justify-center flex w-full">
                <div data-aos="zoom-in" data-aos-duration="700" data-aos-anchor-placement="top-bottom" data-aos-delay="50" className="card px-6 shrink-0 w-full md:w-3/4 md:px-8 shadow-2xl bg-secondary">
                    <div className="flex justify-center w-full mt-8">
                        <div className='text-base-300'>
                            <h5 className="font-bold text-base-300 text-3xl md:text-4xl text-center mb-8 mt-3">Add New Query...</h5>
                            <p className='text-sm text-balance font-semibold text-center px-4'>Hello <span className='text-orange capitalize font-extrabold'>{currentUser?.displayName}</span>, Your Name and Your Email <span className='text-orange font-extrabold'>{currentUser?.email}</span> is used to Add Query, <br />Now, Submit your query and let our community suggest better alternatives! <br /> Fill in the details below to add a new Query to the site.</p>
                            <p className='mb-6 text-balance text-sm font-semibold text-center text-orange mt-2'>Note: All fields are required.</p>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="productName" className="form-label text-base-300 font-bold label-text">Product Name:</label>
                            <input
                                type="text"
                                className="form-control input w-full input-bordered mt-1"
                                id="productName"
                                name="productName"
                                value={formData.productName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="productBrand" className="form-label text-base-300 font-bold label-text">Product Brand:</label>
                            <input
                                type="text"
                                className="form-control input w-full input-bordered mt-1"
                                id="productBrand"
                                name="productBrand"
                                value={formData.productBrand}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="productImageURL" className="form-label text-base-300 font-bold label-text">Product Image URL:</label>
                            <input
                                type="url"
                                className="form-control input w-full input-bordered mt-1"
                                id="productImageURL"
                                name="productImageURL"
                                value={formData.productImageURL}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="queryTitle" className="form-label text-base-300 font-bold label-text">Query Title:</label>
                            <input
                                type="text"
                                className="form-control input w-full input-bordered mt-1"
                                id="queryTitle"
                                name="queryTitle"
                                value={formData.queryTitle}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="boycottingReason" className="form-label text-base-300 font-bold label-text">Boycotting Reason Details:</label>
                            <textarea
                                className="form-control input w-full input-bordered mt-1 pt-2"
                                id="boycottingReason"
                                name="boycottingReason"
                                value={formData.boycottingReason}
                                onChange={handleChange}
                                required
                            />
                        </div>


                        <button type="submit" className="btn mb-8 mt-2 bg-orange border-orange w-full text-white hover:bg-transparent hover:text-orange hover:border-orange">
                            Add Query
                        </button>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AddQuery;
