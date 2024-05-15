import PropTypes from 'prop-types';
import { FaCommentAlt, FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth/useAuth';
import Swal from 'sweetalert2';

const MyQueriesCard = ({ query }) => {
    const { setRender1, render1 } = useAuth();
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

    // slice 
    const slicedReason = boycottingReason.slice(0, 50);

    // handle delete
    const handleDelete = (_id) => {

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
                fetch(`${import.meta.env.VITE_API_URL}/queries/id/${_id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ _id })
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Query has been deleted.",
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
                    })
            }
        });
    }
    return (
        <div data-aos="zoom-in" data-aos-duration="700" data-aos-anchor-placement="top-bottom" data-aos-delay="50" className="card recent-query-card bg-gradient-to-b from-orange via-amber-200 to-rose-100 rounded-lg p-5 mb-4 shadow-lg">
            <img
                src={productImageURL}
                alt={`Query Poduct ${productName} Image`}
                className="w-full min-h-48 object-contain rounded-md mb-3 bg-base-300 border-2 border-orange"
            />
            <div className="flex items-center justify-between mb-3">
                <div className='flex items-center'>
                    <div>
                        <img
                            src={userImageUrl}
                            alt={userName}
                            className="w-9 h-9 mr-2 rounded-full border-2 border-orange"
                        />
                    </div>
                    <div>
                        <p className="text-sm text-primary font-semibold">{userName}</p>
                        <p className="text-xs text-gray-600">{userEmail}</p>
                    </div>
                </div>
                <div className='tooltip tooltip-left tooltip-warning' data-tip="Recommended">
                    <p className="text-xl text-orange flex items-center gap-1 "><FaCommentAlt></FaCommentAlt> {recommendationCount}</p>
                </div>
            </div>
            <div className="card-body p-0">
                <h3 className="text-lg font-bold text-primary mb-1">{queryTitle}</h3>
                <p className="text-sm text-gray-600 mb-0"><span className="font-semibold">Product Name:</span> {productName}</p>
                <p className="text-sm text-gray-600 mb-0"><span className="font-semibold">Brand:</span> {productBrand}</p>
                <p className="text-sm text-gray-600 break-words mb-0">
                    <span className="font-semibold">Alternation Reason:</span> {
                        boycottingReason.length > 50 ? `${slicedReason}...` : boycottingReason
                    }
                </p>
                <p className="text-sm text-gray-600 mb-0"><span className="font-semibold">Posted Date & Time:</span> {datePosted}</p>
                {
                    updateDatePosted && <p className="text-sm text-gray-600"><span className="font-semibold">Query Last Updated:</span> {updateDatePosted}</p>
                }
                <div className='mt-4'>
                    <div className="flex gap-2 mb-1 justify-between">
                        <Link to={`/queryDetails/id/${_id}`} className="btn-xs flex items-center bg-orange opacity-80 hover:opacity-100 text-white hover:bg-orange rounded-full py-4 px-4">
                            <FaCommentAlt className="mr-1" /> Details
                        </Link>
                        <Link to={`/updateQuery/id/${_id}`} className="btn-xs flex items-center bg-amber-300 text-white hover:bg-amber-500 rounded-full py-4 px-4">
                            <FaEdit className="mr-1" /> Update
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="btn-xs flex items-center bg-rose-200 text-rose-600 hover:bg-rose-300 hover:text-white rounded-full py-4 px-4">
                            <FaTrash className="mr-1" /> Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

MyQueriesCard.propTypes = {
    query: PropTypes.object.isRequired,
};

export default MyQueriesCard;