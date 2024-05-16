/* eslint-disable react/prop-types */
import RecommendForMeRecommendationCard from "./RecommendForMeRecommendationCard";

const RecommendForMeQueryCard = ({ query }) => {
    const {
        _id,
        productName,
        productImageURL,
        datePosted,
        recommendations,
    } = query;

    return (
        <tr className="items-center justify-center h-fit">
            <td>
                <img src={productImageURL} alt={`Query Poduct ${productName} Image`} className="min-w-20 rounded-md border border-black h-fit min-h-16 object-cover" />
            </td>
            <td>
                <div>
                    <h3 className="card-title text-lg font-bold mb-2">Product Name: {productName}</h3>
                </div>
                <div>
                    <p className="text-sm text-gray-400 mb-0">
                        <span className="font-semibold">Query Posted:</span> {datePosted}
                    </p>
                </div>
            </td>
            <ul className="justify-between flex flex-col items-center w-full">
                {
                    recommendations.map((recomendation, idx) => <RecommendForMeRecommendationCard
                        key={idx}
                        recomendation={recomendation}
                        _id={_id}
                    >
                    </RecommendForMeRecommendationCard>)
                }
            </ul>
        </tr>
    );
};

export default RecommendForMeQueryCard;