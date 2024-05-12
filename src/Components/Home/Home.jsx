// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import { useLoaderData } from "react-router-dom";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Home.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Helmet } from 'react-helmet-async';
// import Banner1 from './Banner1/Banner1';
// import Banner2 from './Banner2/Banner2';
// import FAQSection from './FAQsection/FAQsection';
// import CraftItems from './CraftItems/CraftItems';
// import ArtAndCraftCategories from './ArtAndCraftCategories/ArtAndCraftCategories';
import Banner1 from './Banner1/Banner1';
import RecentQueryItems from './RecentQueryItems/RecentQueryItems';
import { useLoaderData } from 'react-router-dom';
import Testimonials from '../Testimonials/Testimonials';
// import Banner2 from './Banner2/Banner2';
import FAQSection from './FAQSection/FAQSection';


const Home = () => {
    const  data  = useLoaderData();
    console.log(data);
    const queryItemData = data;

    return (
        <div className='bg-base-300'>
            <Helmet>
                <title>Home | BB-QueryHub</title>
            </Helmet>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide> 
                    <div className="hero a1 min-h-screen">
                        <div className="hero-overlay bg-opacity-20"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="px-8" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000" >
                                <h1 className="mb-8 text-white text-4xl lg:text-6xl md:text-5xl font-extrabold">Welcome to BB-QueryHub...</h1>
                                <p className="mb-5 text-white px-6 lg:px-24 text-sm lg:text-base md:text-base">your platform for discovering alternative product solutions. Explore a world of possibilities! <br />Discover better alternatives to your favorite products. <br /> Join our community to find innovative solutions.</p>
                                <a href='#queryItems' className="btn animate-bounce hover:animate-none bg-orange hover:bg-orange border-orange text-white hover:text-white rounded hover:border-orange opacity-90 hover:-translate-y-1 transition-all duration-200 font-bold mt-6">Start Exploring</a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="hero a2 min-h-screen">
                        <div className="hero-overlay bg-opacity-30"></div>
                        <div data-aos="zoom-in" data-aos-duration="1000" className="hero-content text-center text-neutral-content">
                            <div className="px-8" data-aos="zoom-in" data-aos-duration="1000">
                                <h1 className="mb-8  opacity-85 text-4xl lg:text-6xl md:text-5xl font-extrabold text-primary">Discover New Recommendations</h1>
                                <p className="mb-5 text-primary opacity-75 px-6 lg:px-24 text-sm lg:text-base md:text-base text-balance">Find alternative product suggestions from our community. Explore and compare different options. <br /> Unlock a world of product choices. <br />Join us to discover unique recommendations that match your preferences.</p>
                                <a href='#queryItems' className="btn animate-pulse hover:animate-none bg-primary hover:bg-primary border-primary text-white hover:text-white rounded hover:border-primary opacity-95 hover:-translate-y-1 transition-all duration-200 font-bold mt-6">Start Exploring</a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="hero a3 min-h-screen">
                        <div className="hero-overlay bg-opacity-15"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div data-aos="zoom-in" data-aos-duration="1000" className="px-8">
                                <h1 className="mb-6 animate-bounce hover:animate-none text-4xl text-[#FF6347] lg:text-6xl md:text-5xl font-bold">Explore Product Alternatives</h1>
                                <p className="mb-5 px-6 lg:px-24 text-[#FF6347] font-semibold text-sm lg:text-base md:text-base">From everyday essentials to niche products, <br /> discover diverse recommendations tailored to your needs.</p>
                                <a href='#queryItems' className="btn bg-[#FF6347] hover:bg-[#FF6347] border-[#FF6347] text-white hover:text-white rounded hover:border-[#FF6347]  hover:-translate-y-1 transition-all duration-200 font-bold mt-6">Find Your Match</a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <Banner1></Banner1>
            <RecentQueryItems queryItemData={queryItemData}></RecentQueryItems>
            <Testimonials></Testimonials>
            {/* <Banner2></Banner2> */}
            <FAQSection></FAQSection> 
        </div>
    );
};

export default Home;