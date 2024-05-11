import { FaArrowUp, FaLinkedin } from 'react-icons/fa6';
import footerLogo from '../../../assets/logo.png';

const Footer = () => {
    return (
        <div>
            <div>
                <footer className="footer footer-center p-10 bg-primary pt-20 pb-10 mx-auto">
                    <aside>
                        <a href="#Top" className="opacity-90 text-white hover:text-white hover:-translate-y-1 transition-transform hover:opacity-100 mb-3"><FaArrowUp className='text-5xl p-1 bg-orange hover:rounded-full'></FaArrowUp></a>
                        <img src={footerLogo} alt="footer logo" className="w-40 md:w-52 mb-4" />
                        <span className='text-3xl font-semibold text-white opacity-80 px-8 mb-2'>Welcome to  our website!</span>
                        <p className="font-semibold text-white opacity-80 text-xs text-balance">
                            We are a team of professionals who are dedicated to providing you with the best service possible. We are here to help you with any query, questions or concerns you may have. Our goal is to make your experience as easy and enjoyable as possible. We look forward to working with you!
                        </p>
                        <span className='text-3xl font-semibold text-orange opacity-70 px-8 mt-6'>Contact Us: </span>
                        <p className='font-semibold text-white opacity-80 text-base'>
                            Email: Contact@BB-QueryHub.com <br />
                            Phone: +1 (123) 456-7890</p>
                        <hr className="mt-8 border-white border-dotted w-11/12 md:w-9/12" />
                        <nav className="mt-8 text-white">
                            <div className="grid grid-flow-col gap-4">
                                <a href="#" className="opacity-80 hover:text-orange hover:opacity-100"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                                <a href="#" className="opacity-80 hover:text-orange hover:opacity-100"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                                <a href="#" className="opacity-80 hover:text-orange hover:opacity-100"><FaLinkedin className='text-2xl'></FaLinkedin></a>
                            </div>
                        </nav>
                        <p className="text-white mt-2">Copyright © 2024 <a href="#" className='text-orange font-bold'>BB-QueryHub </a>- All right reserved.</p>
                    </aside>

                </footer>
            </div>
        </div>
    );
};

export default Footer;