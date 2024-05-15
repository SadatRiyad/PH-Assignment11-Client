/* eslint-disable react/prop-types */
// MyRecommendationsCard.js


const MyRecommendationsCard = ({ recommendation, onDelete }) => {
    const {
        productName,
        productBrand,
        productImageURL,
        queryTitle,
        recommendations,
    } = recommendation;

    const handleDeleteClick = (recommendationId) => {
        onDelete(recommendationId);
    };

    return (
        <tr className="recommendation-card">
            <td>
                <img className="min-w-20 max-w-20 border border-black h-fit min-h-16 object-cover" src={productImageURL} alt="Query product img" />
            </td>
            <td>
                {queryTitle}
            </td>
            <td>
                Product: {productName} <br /> (Brand: {productBrand})
            </td>

            {recommendations.map((rec) => (
                <ul key={rec.id}>
                    <li className="justify-between flex items-center text-center">
                        <td>
                            <img src={rec.recommendedProductImageURL} alt="img" className="min-w-20 border border-black h-fit min-h-16 object-cover" />

                        </td>
                        <td><p>{rec.recommendedProductName}</p></td>
                        <td>{rec.recommendedUserName}</td>
                        <td>{rec.timestamp.slice(0, 10)} <br />{rec.timestamp.slice(11, 19)}</td>
                        <td>
                            <button className="btn ml-4 btn-ghost bg-orange text-white btn-md hover:bg-transparent hover:border-orange hover:text-orange" onClick={() => handleDeleteClick(rec.id)}>Delete</button>
                        </td>
                    </li>
                </ul>
            ))}
        </tr>
    );
};

export default MyRecommendationsCard;
