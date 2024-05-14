import useAuth from "../Hooks/useAuth/useAuth";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Helmet } from "react-helmet-async";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import QueriesCard from "./QueriesCard";
import { BiLeftTopArrowCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

const Queries = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const { render1, data, setRender1 } = useAuth();
    const [queries, setQueries] = useState([]);
    const [search, setSearch] = useState("");
    const [searchText, setSearchText] = useState("");


    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/queries`)
            .then(response => {
                setQueries(response.data);
            })
            .catch(error => {
                console.error('Error fetching queries:', error);
            });
    }, [render1, search]);
    // console.log(queries)

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

    const handleSearch = e => {
        e.preventDefault();
        const text = e.target.search.value;
        setSearch(text);
        setSearchText(text);
        const filteredQueries = data.filter(query => {
            return query.productName.toLowerCase().includes(text.toLowerCase());
        });
        setQueries([...filteredQueries]);
        setSearch("");
    }
    console.log(search)
    return (
        <>
            <Helmet>
                <title>Queries | BB-QueryHub</title>
            </Helmet>
            <div className="pb-1 pt-1 bg-cyan-950 px-1">
                <div data-aos="zoom-in" data-aos-duration="700" data-aos-anchor-placement="top-bottom" data-aos-delay="50" className="mt-0 mb-0 md:mt-4" id="myQueries">
                    <div className="hero-content text-center text-neutral-content bg-blend-saturation">
                        <div className="max-w-md">
                            <h1 className="mb-2 md:mb-3 mt-4 text-4xl md:text-3xl lg:text-4xl font-extrabold flex justify-center text-orange items-center gap-1">Queries</h1>
                            <p className="text-xs px-2">
                                Welcome to <span className="font-bold">&quot;All Queries,&quot;</span> <br /> Explore queries submitted by other users and discover alternative product recommendations...</p>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <div className="dropdown dropdown-top">
                            <div tabIndex={0} role="button" className="btn m-1 bg-orange hover:bg-orange border-orange text-white hover:text-white rounded hover:border-orange transition-all duration-200 py-1">Sort by <BiLeftTopArrowCircle className="text-xl"></BiLeftTopArrowCircle></div>
                            <ul tabIndex={0} className="dropdown-content right-1 z-[999] menu p-2 shadow w-44 bg-orange hover:bg-orange border-orange text-white hover:text-white rounded hover:border-orange  transition-all duration-200">
                                <li onClick={() => { handleSort("newDatePosted") }}><a>Sort for New Query</a></li>
                                <li onClick={() => { handleSort("datePosted") }}><a>Sort for Old Query</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div data-aos="fade-up" data-aos-duration="700" data-aos-anchor-placement="top-bottom" data-aos-delay="50" className="flex justify-between items-center mb-4 text-center m-4 border-b pb-2 mt-4">
                    <div>
                        <h2 className="text-lg md:text-3xl font-bold text-orange">Total Queries: {queries.length}</h2>
                    </div>
                    <form onSubmit={handleSearch}>
                        {/* search input */}
                        <label className="input input-bordered flex items-center">
                            <input type="text" name="search" placeholder="Enter Product Name" className="max-w-24 md:max-w-full focus:placeholder-transparent" aria-label="Enter Product Name" />
                            <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg></button>
                        </label>
                    </form>
                </div>

                <div data-aos="zoom-in" data-aos-duration="600" data-aos-anchor-placement="top-bottom" data-aos-delay="50" className="px-4">
                    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className={'mb-32'}>
                        <TabList className="rounded-md hidden bg-orange p-2 w-fit mx-auto md:flex text-white items-center justify-center focus:bg-orange text-center">
                            <Tab className="active:bg-base-100 px-4 py-2">Multiple Card View</Tab>
                            <Tab className="active:bg-base-100 px-4 py-2">Single Card View</Tab>
                        </TabList>
                        <TabPanel>
                            <div className="mt-12">
                                {queries.length === 0 ? (
                                    <div className="text-start w-fit mx-auto mt-8 md:mt-20">
                                        <div className="bg-base-200 px-6 py-12 md:p-12 ">
                                            <h1 className="text-center px-5 md:px-12 text-xl md:2xl lg:3xl font-bold text-orange">Hey there! <br /> It looks like there is no Query availabe for &apos;{searchText}&apos;. <br /> If you want to create a query about &apos;{searchText},&apos; <br /> Go to <Link to="/myQueries" className="text-red underline">My Queries</Link> and then add your query. <br /><span className="text-red font-bold text-2xl">OR,</span></h1>
                                            <div className="flex justify-center mt-8">
                                                <button onClick={() => setRender1(!render1)} className="btn btn-primary bg-orange border-orange text-white hover:bg-orange hover:border-orange hover:-translate-y-1">Reset Search</button>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                        {queries.map((query, idx) => (
                                            <QueriesCard key={idx} query={query} />
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
                                            <h1 className="text-center px-5 md:px-12 text-xl md:2xl lg:3xl font-bold text-orange">Hey there! <br /> It looks like there is no Query availabe for &apos;{searchText}&apos;. <br /> If you want to create a query about &apos;{searchText},&apos; <br /> Go to <Link to="/myQueries" className="text-red underline">My Queries</Link> and then add your query. <br /><span className="text-red font-bold text-2xl">OR,</span></h1>
                                            <div className="flex justify-center mt-8">
                                                <button onClick={() => setRender1(!render1)} className="btn btn-primary bg-orange border-orange text-white hover:bg-orange hover:border-orange hover:-translate-y-1">Reset Search</button>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-1 lg:px-28 text-pretty gap-4 ">
                                        {queries.map((query, idx) => (
                                            <QueriesCard key={idx} query={query} />
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

export default Queries;