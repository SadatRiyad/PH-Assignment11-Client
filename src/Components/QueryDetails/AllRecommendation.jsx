/* eslint-disable react/prop-types */

const AllRecommendation = ({ recommendation, idx }) => {
    const {
        recommendationTitle,
        recommendationReason,
        recommendedProductName,
        recommendedUserImageUrl,
        recommendedProductImageURL,
        recommendedUserEmail,
        recommendedUserName,
        timestamp
    } = recommendation;
    return (
        <div>
            <div className="card mb-12 border-2 border-red lg:px-20 lg:py-8 recent-query-card bg-gradient-to-b from-orange via-amber-200 to-rose-100 rounded-lg p-5 shadow-lg">
                <div>
                    <p className="btn-xs border-2 flex md:hidden mb-6 justify-center items-center gap-1 py-4 lg:py-6 lg:px-8 bg-[#FF6347] hover:scale-105 border-[#FF6347] text-white rounded-full text-[14px] lg:text-lg px-8 shadow-xl transition-all duration-200 font-bold mt-0">Recommendation No: {idx + 1}</p>
                </div>
                <div data-aos="zoom-in" data-aos-duration="700" data-aos-anchor-placement="top-bottom" data-aos-delay="50" className="flex justify-between items-center mb-2">
                    <div className='flex items-center'>
                        <div>
                            <img
                                src={recommendedUserImageUrl}
                                alt={recommendedUserEmail}
                                className="w-10 h-10 lg:w-14 lg:h-14 mr-2 rounded-full border-2 border-white"
                            />
                        </div>
                        <div>
                            <p className="text-sm lg:text-lg text-primary font-semibold">{recommendedUserName}</p>
                            <p className="text-xs lg:text-base text-gray-600">{recommendedUserEmail}</p>
                        </div>
                    </div>
                    {/* recommend */}
                    <div>
                        <p className="btn-xs hidden border-2 md:flex justify-center items-center gap-1 py-4 lg:py-6 lg:px-8 bg-[#FF6347] hover:scale-105 border-[#FF6347] text-white rounded-full text-[14px] lg:text-lg px-8 shadow-xl transition-all duration-200 font-bold mt-0">Recommendation No: {idx + 1}</p>
                    </div>

                </div>
                <div data-aos="fade-up" data-aos-duration="700" data-aos-anchor-placement="top-bottom" data-aos-delay="50" className="card-body p-0 lg:my-2 grid grid-cols-1 md:grid-cols-2">
                    <div className='my-4'>
                        <h3 className="text-lg md:text-2xl lg:text-5xl font-bold text-primary mb-1 lg:mb-4">{recommendationTitle}</h3>
                        <p className="text-sm lg:text-lg text-gray-800 mb-1 mt-2"><span className="font-semibold">Recommended Product Name:</span> {recommendedProductName}</p>
                        {/* <p className="text-sm lg:text-lg text-gray-800 mb-1"><span className="font-semibold">Brand:</span> {}</p> */}
                        <p className="text-sm lg:text-lg text-gray-800 break-words mb-1">
                            <span className="font-semibold">Recommendation Reason:</span> {recommendationReason}
                        </p>
                        <p className="text-sm lg:text-lg text-gray-800 mb-1"><span className="font-semibold">Recommended Date & Time:</span> {timestamp}</p>
                        {/* {
                            updateDatePosted && <p className="text-sm lg:text-lg text-gray-800"><span className="font-semibold">Query Last Updated:</span> {updateDatePosted}</p>
                        } */}
                    </div>
                    <div>
                        <img
                            src={recommendedProductImageURL}
                            alt={`Recommended product ${recommendedProductName} image`}
                            className="w-full min-h-48 max-h-80 lg:max-h-96 object-contain rounded-md mt-6 mb-6 bg-base-300 border-2 border-red bg-gradient-to-t from-gray-200 via-gray-300 to-transparent backdrop-blur-lg inset-0"
                        />
                    </div>
                </div>


            </div>
        </div>
    );
};

export default AllRecommendation;