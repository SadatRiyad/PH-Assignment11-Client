import useAuth from "../Hooks/useAuth/useAuth";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import MyQueriesCard from "./MyQueriesCard";
import { Helmet } from "react-helmet-async";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const MyQueries = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const { user, render1 } = useAuth();
    const { email } = user;
    const [queries, setQueries] = useState([]);

    const url = `${import.meta.env.VITE_API_URL}/queries/myQueries/${email}`;
    useEffect(() => {
        axios.get(url, { withCredentials: true })
            .then(response => {
                setQueries(response.data);
            })
            .catch(error => {
                console.error('Error fetching queries:', error);
            });
    }, [email, render1,url]);

    const handleSort = (sort) => {
        if (sort === "newDatePosted") {
            const sortedQueries = queries.sort((a, b) => new Date(b.datePosted) - new Date(a.datePosted));
            setQueries([...sortedQueries]);
        } else {
            const sortedQueries = queries.sort((a, b) => new Date(a.datePosted) - new Date(b.datePosted));
            setQueries([...sortedQueries]);
        }
        return queries;
    }

    return (
        <>
            <Helmet>
                <title>My Queries | BB-QueryHub</title>
            </Helmet>
            <div className="pb-1 pt-1 bg-cyan-950 px-1">
                <div data-aos="fade-up" data-aos-duration="700" data-aos-anchor-placement="top-bottom" data-aos-delay="50" className="mt-8" id="myQueries">
                    <div className="hero w-full h-[50vh]" style={{ backgroundImage: 'url(https://static.vecteezy.com/system/resources/thumbnails/005/239/318/small/abstract-fluid-blue-wave-banner-background-illustration-vector.jpg)' }}>
                        <div className="hero-overlay bg-opacity-10"></div>
                        <div className="hero-content text-center text-neutral-content bg-blend-saturation">
                            <div className="max-w-md text-blue">
                                <h1 className="mb-5 mt-4 text-2xl md:text-3xl lg:text-4xl font-extrabold">Hello <span className="text-orange">{user.displayName},</span><br /></h1>
                                <p className="mb-5 text-xs px-2 text-black">
                                    Welcome to <span className="font-bold">&quot;My Queries,&quot;</span> your personalized queries. Here, you can view and manage all the queries you&apos;ve added.
                                    Explore your queries, featuring your favorite query. You can Edit details, update images, or remove items as needed.
                                    Your query, your control. View and manage your product queries here at <span className="font-bold">BB-QueryHub.</span></p>
                                <div className='flex justify-center mt-4 mb-8'>
                                    <div className="dropdown">
                                        <div tabIndex={0} role="button" className="btn m-1 bg-orange hover:bg-orange border-orange text-white hover:text-white rounded hover:border-orange transition-all duration-200">Sort by <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M19.5 8.25L12 15.75L4.5 8.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg></div>
                                        <ul tabIndex={0} className="dropdown-content z-[999] menu p-2 shadow w-44 bg-orange hover:bg-orange border-orange text-white hover:text-white rounded hover:border-orange  transition-all duration-200">
                                            <li onClick={() => { handleSort("newDatePosted") }}><a>Sort for New Query</a></li>
                                            <li onClick={() => { handleSort("datePosted") }}><a>Sort for Old Query</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div data-aos="zoom-in" data-aos-duration="700" data-aos-anchor-placement="top-bottom" data-aos-delay="50" className="flex justify-between items-center mb-4 m-4 border-b pb-2">
                    <h2 className="text-xl md:text-3xl font-bold text-orange">My Total Queries: {queries.length}</h2>
                    <Link to="/addQuery" className="bg-orange hover:bg-orange-dark text-white font-bold py-2 px-4 text-base rounded">
                        Add Query
                    </Link>
                </div>

                <div data-aos="zoom-in" data-aos-duration="700" data-aos-anchor-placement="top-bottom" data-aos-delay="50" className="px-4">
                    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className={'mb-32'}>
                        <TabList className="rounded-md bg-orange p-2 w-fit mx-auto hidden md:flex text-white items-center justify-center focus:bg-orange text-center">
                            <Tab className="active:bg-base-100 px-4 py-2">Multiple Card View</Tab>
                            <Tab className="active:bg-base-100 px-4 py-2">Single Card View</Tab>
                        </TabList>
                        <TabPanel>
                            <div className="mt-12">
                                {queries.length === 0 ? (
                                    <div className="text-start w-fit mx-auto mt-8 md:mt-20">
                                        <div className="bg-base-200 px-6 py-12 md:p-12 ">
                                            <h1 className="text-center px-5 md:px-12 text-xl md:2xl lg:3xl font-bold text-orange">Hey there! <br /> It looks like you haven&apos;t added any query yet. <br /> Why not get started? <br /> Click the button below to add your first Query.<br /> We can&apos;t wait to see what you create! </h1>
                                            <div className="flex justify-center mt-8">
                                                <Link to="/addQuery" className="btn btn-primary bg-orange border-orange text-white hover:bg-orange hover:border-orange hover:-translate-y-1">Add Query</Link>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {queries.map(query => (
                                            <MyQueriesCard key={query._id} query={query} />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="mt-12">
                                {queries.length === 0 ? (
                                    <div className="text-start w-fit mx-auto mt-8 md:mt-20">
                                        <div className="bg-base-200 px-6 py-12 md:p-12 ">
                                            <h1 className="text-center px-5 md:px-12 text-xl md:2xl lg:3xl font-bold text-orange">Hey there! <br /> It looks like you haven&apos;t added any query yet. <br /> Why not get started? <br /> Click the button below to add your first Query.<br /> We can&apos;t wait to see what you create! </h1>
                                            <div className="flex justify-center mt-8">
                                                <Link to="/addQuery" className="btn btn-primary bg-orange border-orange text-white hover:bg-orange hover:border-orange hover:-translate-y-1">Add Query</Link>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-1 lg:px-28 text-pretty gap-4 ">
                                        {queries.map(query => (
                                            <MyQueriesCard key={query._id} query={query} />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </TabPanel>
                    </Tabs>


                </div>
            </div>
        </>
    );
};

export default MyQueries;