/* eslint-disable react/prop-types */
import { Typewriter } from 'react-simple-typewriter';

// Sample avatar images (replace these URLs with actual avatar URLs)
const avatarImages = {
    Sarah: 'https://img.freepik.com/premium-vector/avatar-redhaired-woman-portrait-young-girl-vector-illustration-face_217290-223.jpg',
    Mark: 'https://img.freepik.com/premium-photo/boy-flat-cartoon-character-illustration_620650-2063.jpg',
    Emily: 'https://img.freepik.com/premium-vector/blond-woman-avatar-portrait-young-girl-vector-illustration-face_217290-581.jpg?w=360'
};

const Testimonials = () => {
    return (
        <section className="bg-gradient-to-b from-orange via-amber-200 to-rose-100 py-16 px-4">
            <div className="container mx-auto px-4">
                <h2
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-delay="0"
                    className="text-3xl sm:text-4xl font-bold text-center mb-4 text-base-100"
                >
                    User {' '}
                    <span style={{ color: '#140d0d', fontWeight: 'bold' }}>
                        <Typewriter
                            words={['All Testimonials', 'Say About us..', 'Testimonials..']}
                            cursor
                            cursorStyle='.'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </h2>
                <p
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-delay="0"
                    className="text-sm md:text-base text-center text-base-100 mb-12 md:mb-20 text-balance">
                    Discover what users are saying about BB-QueryHub and how it is making <br /> a difference in finding the
                    best products and alternatives.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    <Testimonial
                        text="BB-QueryHub helped me find a perfect alternative to my favorite skincare product. Highly recommended!"
                        author="Sarah"
                    />
                    <Testimonial
                        text="I love the variety of options available here. It's like having a personal shopping assistant!"
                        author="Mark"
                    />
                    <Testimonial
                        text="Being part of BB-QueryHub has saved me time and money. It's my go-to for product suggestions!"
                        author="Emily"
                    />
                </div>
            </div>
        </section>
    );
};

const Testimonial = ({ text, author }) => {
    return (
        <div data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="0"
            className="card hover:shadow-2xl rounded-lg shadow-md mb-2 p-6 bg-white hover:-translate-y-1" style={author === 'Mark' ? { transform: 'translateY(-1rem)' } : {}}>
            <p className="card-body p-0 text-lg text-gray-800 mb-4">{`"${text}"`}</p>
            <div className="flex items-center">
                <img
                    className="w-8 h-8 rounded-full border border-primary mr-2"
                    src={avatarImages[author]}
                    alt={`Avatar of ${author}`}
                />
                <p className="text-sm font-semibold text-gray-600">{`- ${author}`}</p>
            </div>
        </div>
    );
};

export default Testimonials;
