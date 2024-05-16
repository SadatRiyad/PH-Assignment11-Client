/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const RecommendForMeRecommendationCard = ({ recomendation, _id }) => {
    const {
        recommendedProductName,
        recommendedProductImageURL,
        recommendedUserEmail,
        recommendedUserName,
        recommendedUserImageUrl,
        timestamp
    } = recomendation;

    return (
        <li className='items-center h-full justify-between flex w-full mt-4 mb-2'>
            <td className='items-center h-full'>
                <div className="flex gap-4 items-center">
                    <div className="w-1/3 h-fit ">
                        <img src={recommendedProductImageURL} alt="Product Image" className="rounded-md min-w-20 border border-orange h-fit min-h-16 object-cover" />
                    </div>
                    <div className="flex items-center">
                        <div className="avatar mr-2">
                            <div className="mask mask-squircle w-10 h-10 border border-orange rounded-full">
                                <img src={recommendedUserImageUrl} alt="Image" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{recommendedUserName}</div>
                            <div className="text-xs opacity-50"><span className="font-bold text-[10px]">{recommendedUserEmail}</span></div>
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <div className="flex items-center gap-6">
                    <div>
                        <div className="font-bold"><span className="font-medium">Product Name: </span>{recommendedProductName}</div>
                        <div className="text-xs opacity-50"><span className="font-bold">{timestamp}</span></div>
                    </div>
                </div>
            </td>

            <th>
                <Link to={`/queryDetails/id/${_id}`} className="btn ml-4 btn-ghost bg-orange text-white btn-md hover:bg-transparent hover:border-orange hover:text-orange">View Details</Link>
            </th>
        </li>
    );
};

export default RecommendForMeRecommendationCard;