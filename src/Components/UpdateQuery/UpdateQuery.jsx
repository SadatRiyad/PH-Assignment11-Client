import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ToastContainer, toast } from 'react-toastify';
import useAuth from '../Hooks/useAuth/useAuth';
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';

const UpdateQuery = () => {
    const data = useLoaderData();
    const { productName, productBrand, productImageURL, queryTitle, boycottingReason, datePosted ,_id} = data;
    // console.log(productName, productBrand, productImageURL, queryTitle, boycottingReason, userEmail, userName, userImageUrl, datePosted)
    const { auth, setRender1, render1 } = useAuth();
    const currentUser = auth.currentUser;
    // console.log(currentUser)

    const [formData, setFormData] = useState({
        productName: `${productName}`,
        productBrand: `${productBrand}`,
        productImageURL: `${productImageURL}`,
        queryTitle: `${queryTitle}`,
        boycottingReason: `${boycottingReason}`,
        userEmail: `${currentUser?.email}`,
        userName: `${currentUser?.displayName}`,
        userImageUrl: `${currentUser?.photoURL}`,
        datePosted: `${datePosted}`
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
                updateDatePosted: formattedDate,
            };

            // Send a PUT request to your server to Update the query
            const response = await axios.put(`${import.meta.env.VITE_API_URL}/queries/id/${_id}`, queryData);
            console.log('Query update successfully:', response.data);

            if (response.data.acknowledged == true) {
                toast.success('Query update successfully!', { autoClose: 2000 });
                setRender1(!render1);
            }
        } catch (error) {
            console.error('Error updatting query:', error.message);
            toast.error('An error occurred while updatting the query. Please try again.');
        }


    };

    return (
        <div className="hero card-body px-4 md:px-12 min-h-screen" style={{ background: 'radial-gradient(circle, #ffa500,#ffa500,#ffd700,#ffa500, #ffa500)' }}>
            <Helmet>
                <title>Update Query | BB-QueryHub</title>
            </Helmet>
            <div className="justify-center flex w-full">
                <div data-aos="zoom-in" data-aos-duration="700" data-aos-anchor-placement="top-bottom" data-aos-delay="50" className="card px-6 shrink-0 w-full md:w-3/4 md:px-8 shadow-2xl bg-secondary">
                    <div className="flex justify-center w-full mt-8">
                        <div className='text-base-300'>
                            <h5 className="font-bold text-base-300 text-2xl md:text-4xl text-center mb-8 mt-3">Update Query for: <span className='text-orange'>{productName}</span></h5>
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
                                placeholder="Product Full Name"
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
                                placeholder="Product Brand Name"
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
                                placeholder="ex: http://exampleProductImageURL.png"
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
                                placeholder="ex: Is there any Better product that gives me the same quality?"
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
                                placeholder="Please provide a detailed reason for boycotting this product."
                                value={formData.boycottingReason}
                                onChange={handleChange}
                                required
                            />
                        </div>


                        <button type="submit" className="btn mb-8 mt-3 bg-orange border-orange w-full text-white hover:bg-transparent hover:text-orange hover:border-orange">
                            Update Query
                        </button>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default UpdateQuery;