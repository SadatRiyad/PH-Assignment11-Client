import PropTypes from 'prop-types';
import { Typewriter } from 'react-simple-typewriter';
import RecentQueryItemsData from './RecentQueryItemsData';
import { Link } from 'react-router-dom';

const RecentQueryItems = ({ queryItemData }) => {
    return (
        <div className="py-20 bg-base-300 -mt-6" id="queryItems">
            <h2 data-aos="zoom-in" data-aos-duration="1000" data-aos-anchor-placement="top-bottom" data-aos-delay="0" className="text-3xl md:text-5xl text-center font-bold mb-4">{' '}
                <span style={{ color: '#FF6347', fontWeight: 'bold' }}>
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                        words={['Queries', 'Recent Queries Showcase', 'Recent Queries']}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </span>
            </h2>
            <p data-aos="zoom-in" data-aos-duration="600" data-aos-anchor-placement="top-bottom" data-aos-delay="50" className="text-sm text-center px-4 md:px-20 mb-8 mt-5 text-tertiary">Discover the latest queries from our users seeking alternative product recommendations. <br /> Find out what others are looking for!

            </p>
            <div data-aos="fade-up" data-aos-duration="600" data-aos-anchor-placement="top-bottom" data-aos-delay="0" className="text-start mt-8 md:mt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full px-4">

                    {queryItemData?.slice(0, 6).map((queryItemData) => (
                        <RecentQueryItemsData key={queryItemData._id} query={queryItemData} />
                    ))}

                </div>
            </div>
            <div className='w-full mt-10 text-center'>
                <Link
                    data-aos="zoom-in" data-aos-duration="600" data-aos-anchor-placement="top-bottom" data-aos-delay="50"
                    to="/allQueries"
                    className="inline-block bg-base-100 border-[#FF6347] border-[1.5px] hover:bg-orange-dark text-[#FF6347] py-3 px-6 rounded-md font-semibold shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                >
                    Discover All Queries...
                </Link>
            </div>
        </div>
    );
};

export default RecentQueryItems;

RecentQueryItems.propTypes = {
    queryItemData: PropTypes.array.isRequired
}