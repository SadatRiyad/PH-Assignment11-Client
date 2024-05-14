import PropTypes from 'prop-types';
import { FaCommentAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const RecentQueryItemsData = ({ query }) => {
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
        userImageUrl
    } = query;

    const cardStyle = {
        overflow: 'hidden',
        border: '2px solid orange', // Ensure a default border style for the gradient effect
        backgroundImage: 'linear-gradient(40deg, #FF6347,#fffeee,#FF6347, #FF6347)',
        borderColor: '#FF6347', // Set transparent border initially
        transition: 'border-color 0.3s ease-in-out', // Smooth transition effect for border color change
    };
    // slice 
    const slicedReason = boycottingReason.slice(0, 50);

    return (
        <div
            style={cardStyle}
            className="card recent-query-card bg-white rounded-lg p-4 mb-4 pb-0 overflow-hidden shadow-lg border border-gradient-orange">
            <img
                src={productImageURL}
                alt={productName}
                className="w-full min-h-48 md:min-h-52 border-2 border-[#FF6347] lg:max-h-60 object-cover rounded-md mb-3"
            />
            <div data-aos="fade-right" data-aos-duration="600" data-aos-anchor-placement="top-bottom" data-aos-delay="0" className='card-body pb-4 break-words items-start text-left px-1 pt-4'>
                <div>
                    <h3 className="card-title text-lg font-bold text-primary mb-2">{queryTitle}</h3>
                </div>
                <div>
                    <p className="card-normal text-sm text-gray-600 mb-1">
                        <span className="font-semibold">Product Name:</span> {productName}
                    </p>
                    <p className="text-sm text-gray-600 mb-1"><span className='font-semibold'>Brand:</span> {productBrand} </p>
                    <p className="text-sm text-gray-600 break-words mb-0">
                        <span className="font-semibold">Alternation Reason:</span> {
                            boycottingReason.length > 50 ? `${slicedReason}...` : boycottingReason
                        } 
                    </p>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                    <span className="font-semibold">Date Posted:</span> {datePosted}
                </p>
                <div className="flex justify-between items-center w-full gap-2 mt-2">
                    <div data-aos="fade-right" data-aos-duration="600" data-aos-anchor-placement="top-bottom" data-aos-delay="50" className="flex items-center">
                        <img
                            src={userImageUrl}
                            alt={userName}
                            className="w-8 h-8 mr-2 md:mr-3 rounded-full ring ring-[#FF6347] ring-offset-white ring-offset-2"
                        />
                        <div>
                            <p className="text-sm text-primary font-semibold">{userName}</p>
                            <p className="text-[10px] text-gray-600 font-medium">{userEmail}</p>
                        </div>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="600" data-aos-anchor-placement="top-bottom" data-aos-delay="50" >
                        <Link to={`/queryDetails/id/${_id}`} className="btn-xs border flex justify-center items-center gap-1 py-4 bg-[#FF6347] hover:bg-transparent border-[#FF6347] text-white hover:text-[#FF6347] rounded-full text-[10px] px-4 hover:border-[#FF6347] transition-all duration-200 font-bold mt-0"><FaCommentAlt /> Recommend</Link>
                    </div>
        
                </div>
            </div>
        </div>
    );
};

export default RecentQueryItemsData;

RecentQueryItemsData.propTypes = {
    query: PropTypes.object.isRequired
}