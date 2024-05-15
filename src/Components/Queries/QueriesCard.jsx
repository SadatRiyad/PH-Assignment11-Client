/* eslint-disable react/prop-types */
import { FaCommentAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const QueriesCard = ({ query }) => {
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
        recommendationCount
    } = query;

    // slice 
    const slicedReason = boycottingReason.slice(0, 50);

    return (
        <Link to={`/queryDetails/id/${_id}`}>
            <div data-aos="zoom-in" data-aos-duration="700" data-aos-anchor-placement="top-bottom" data-aos-delay="50" className="card min-h-full hover:shadow-2xl hover:-translate-y-1 transition-all recent-query-card bg-gradient-to-b from-orange via-amber-200 to-rose-100 rounded-lg p-5 mb-6 shadow-lg">

                <div className="flex justify-between items-center mb-2 mt-1">
                    <div className='flex items-center'>
                        <div>
                            <img
                                src={userImageUrl}
                                alt={userName}
                                className="w-10 h-10 mr-2 rounded-full border-2 border-white"
                            />
                        </div>
                        <div>
                            <p className="text-sm text-primary font-semibold">{userName}</p>
                            <p className="text-xs text-gray-600">{userEmail}</p>
                        </div>
                    </div>
                    <div className='tooltip tooltip-left tooltip-warning' data-tip="Recommend">
                        <p className="btn-xs border-2 flex justify-center items-center gap-1 py-4 bg-[#FF6347] hover:scale-105 border-[#FF6347] text-white rounded-full text-[14px] px-8 shadow-xl transition-all duration-200 font-bold mt-0"><FaCommentAlt /> {recommendationCount}</p>
                    </div>

                </div>
                <div className="card-body p-0">
                    <div className='my-4'>
                        <h3 className="text-lg font-bold text-primary mb-1">{queryTitle}</h3>
                        <p className="text-sm text-gray-800 mb-1 mt-2"><span className="font-semibold">Product Name:</span> {productName}</p>
                        <p className="text-sm text-gray-800 mb-1"><span className="font-semibold">Brand:</span> {productBrand}</p>
                        <p className="text-sm text-gray-800 break-words mb-1">
                            <span className="font-semibold">Alternation Reason: </span>{
                                boycottingReason.length > 50 ? `${slicedReason}...` : boycottingReason
                            }
                        </p>
                        <p className="text-sm text-gray-800 mb-1"><span className="font-semibold">Posted Date & Time:</span> {datePosted}</p>
                        {/* {
                        updateDatePosted && <p className="text-sm text-gray-800"><span className="font-semibold">Query Last Updated:</span> {updateDatePosted}</p>
                    } */}
                    </div>
                </div>
                <div className="">
                    <img
                        src={productImageURL}
                        alt={`Query Poduct ${productName} Image`}
                        className="flex-1 w-full min-h-40 md:min-h-48 max-h-80 object-contain rounded-md mb-3 bg-base-300 border-2 border-orange"
                    />
                </div>
            </div>
        </Link>
    );
};

export default QueriesCard;