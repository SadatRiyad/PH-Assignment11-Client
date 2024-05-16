import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { BsPhone } from 'react-icons/bs';
import { FaRegAddressCard } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { toast } from 'react-toastify';
// import contactImg from '../../assets/contact-image.jpg';
import { Typewriter } from 'react-simple-typewriter';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success('Message sent successfully!', { position: 'top-right' });
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <>
            <Helmet>
                <title>Contact Us | BB-QueryHub</title>
            </Helmet>
            {/* <div className="container mx-auto px-4">
                <img src={contactImg} alt="Contact" className="w-full h-auto rounded-t-xl mb-0 md:-mt-28" />
            </div> */}
            <div data-aos="zoom-in"
                    data-aos-duration="1000"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-delay="0" 
                    className="container mx-auto px-4 pt-8 pb-6">
                <div className="py-8 bg-orange rounded-b-xl mb-1 -mt-10 text-white">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl text-center font-bold">Contact Us...</h2>
                </div>
                <div className="text-center mb-10">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 mt-4">Have any questions or suggestions?</h1>
                    <p className="text-base text-slate-500 mb-4">
                        <span style={{ fontWeight: 'bold' }}>
                            <Typewriter
                                words={['Feel free to reach out to us using the contact information below']}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center mb-4 px-8 py-16 bg-orange rounded-xl">
                    <div className="text-white">
                        <h2 className="text-3xl font-semibold mb-8">Contact Information</h2>
                        <ul className="space-y-4">
                            <li className="flex items-center space-x-4">
                                <FiMail />
                                <span>Email: info@bb-queryhub.com</span>
                            </li>
                            <li className="flex items-center space-x-4">
                                <BsPhone />
                                <span>Phone: +1 (123) 456-7890</span>
                            </li>
                            <li className="flex items-center space-x-4">
                                <FaRegAddressCard />
                                <span>Address: 123 Main Street, City, Country</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-3xl font-semibold text-white mb-8 mt-8">Send us a Message</h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:border-blue-500 mb-4"
                                required
                            />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:border-blue-500 mb-4"
                                required
                            />
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:border-blue-500 mb-4"
                                required
                            />
                            <button
                                type="submit"
                                className="w-full px-6 py-3 bg-blue text-white rounded-md hover:bg-blue-600 focus:outline-none"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUs;
