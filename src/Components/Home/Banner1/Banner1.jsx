import { Link } from 'react-router-dom';

const Banner1 = () => {
    return (
        <div className="card mb-8 mt-8 lg:card-side text-white shadow-xl bg-gradient-to-l from-orange via-amber-300 to-rose-200 mx-4 p-4 pb-4">
            <div className="w-full border pt-4 h-full flex lg:w-2/4 items-center justify-center my-4 ">
                <div data-aos="fade-right" data-aos-duration="700" data-aos-anchor-placement="top-bottom" data-aos-delay="100">
                    <figure><img className="rounded-lg animate-bounce hover:animate-none hover:rotate-6 transition-all pt-20 px-10 md:pt-28 lg:pt-24 lg:px-10" src="https://www.mknspune.com/wp-content/uploads/2020/12/enquiry.png" alt="Banner Image" /></figure>
                </div>
            </div>
            <div className="card-body text-balance w-full lg:w-2/4 justify-center pl-1 lg:pl-8">
                <div data-aos="fade-up" data-aos-duration="700" data-aos-anchor-placement="top-bottom" data-aos-delay="100">
                    <p className="card-title font-normal text-xs text-slate-100 uppercase">BB-QueryHub</p>
                    <h2 className="card-title mt-0 md:mt-3 font-bold text-2xl md:text-3xl lg:text-4xl">Unlock the World of Queries...</h2>
                    <p className="text-slate-50 text-xs md:text-base mt-4">Explore a curated collection of product queries and alternatives on BB-QueryHub. Whether you are searching for better products, unique recommendations, or insights on consumer choices, we have you covered. Our platform connects you with valuable information and user insights to make informed decisions.</p>
                    <div className="card-actions justify-start">
                        <Link to="/allQueries" className="btn w-full bg-orange-500 text-orange border-orange hover:border-orange bg-white hover:bg-white hover:text-orange mt-8 hover:translate-y-1 transition-all duration-100">Explore All Queries</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner1;



// import { Link } from 'react-router-dom';

// const Banner2 = () => {
//     return (
//         <div className="bg-gradient-to-r from-primary to-secondary py-12 md:py-20 text-center rounded-lg shadow-lg m-2">
//             <div data-aos="zoom-in" data-aos-duration="1000" >
//                 <h1 className="text-p-color text-3xl md:text-5xl font-bold mb-4 px-4">
//                     Unlock the World of Queries
//                 </h1>
//                 <p className="text-white opacity-75 text-sm md:text-xl mb-8 px-4">
//                     Embark on a journey to discover answers, insights, and solutions. <br /> Dive deep into a diverse universe of queries.
//                 </p>
//                 <Link
//                     to="/allQueries"
//                     className="inline-block bg-orange hover:bg-orange-dark text-p-color py-3 px-6 rounded-full font-semibold shadow-md transition duration-300 ease-in-out transform hover:scale-105"
//                 >
//                     Explore All Queries
//                 </Link>
//             </div>
//         </div>
//     );
// };

// export default Banner2;