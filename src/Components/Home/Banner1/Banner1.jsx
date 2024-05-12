import { Link } from 'react-router-dom';

const Banner1 = () => {
    return (
        <div className="bg-gradient-to-r from-primary to-secondary py-12 md:py-20 text-center rounded-lg shadow-lg m-2">
            <div data-aos="zoom-in" data-aos-duration="1000" >
                <h1 className="text-p-color text-3xl md:text-5xl font-bold mb-4">
                    Unlock the World of Queries
                </h1>
                <p className="text-white opacity-75 text-lg md:text-xl mb-8 px-4">
                    Embark on a journey to discover answers, insights, and solutions. <br /> Dive deep into a diverse universe of queries.
                </p>
                <Link
                    to="/allQueries"
                    className="inline-block bg-orange hover:bg-orange-dark text-p-color py-3 px-6 rounded-full font-semibold shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                >
                    Explore All Queries
                </Link>
            </div>
        </div>
    );
};

export default Banner1;