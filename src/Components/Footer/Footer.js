import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assests/airplane.png';
const Footer = () => {
    return (
        <div className='bg-tbliss2nd py-5'>
            <div className='grid md:grid-cols-4 justify-between w-10/12 mx-auto'>
                {/* Company */}
                <div>
                    <span className='flex items-center gap-3'>
                        <img src={logo} alt='travel bliss logo' className='w-12' />
                        <h3 className='text-2xl font-bold text-white'>TravelBliss</h3>
                    </span>
                    <p className='text-md font-semibold text-white'>
                        TravelBliss Dhaka (Main branch)<br />
                        25/2 Kawran Bazar C/A Level 12-<br />
                        C-3, Lift 13 Dhaka 1100, Bangladesh<br />
                    </p>
                </div>
                {/* About the Compnay */}
                <div>
                    <ul className='text-md font-semibold text-white'>
                        <li><Link>About TravelBliss</Link></li>
                        <li><Link>Terms and Conditions</Link></li>
                        <li><Link>Privacy Policy</Link></li>
                        <li><Link>Return and Refund Policy</Link></li>
                        <li><Link>Guides & Blogs</Link></li>
                    </ul>
                </div>
                {/* Need Help? */}
                <div>
                    <ul className='text-md font-semibold text-white'>
                        <li><Link>Common Questions</Link></li>
                        <li><Link>Easy EMI's</Link></li>
                        <li><Link>Vanues We Support</Link></li>
                        <li><Link>Payment Methods</Link></li>
                        <li><Link>Turist Safety</Link></li>
                    </ul>
                </div>
                {/* Need Help? */}
                <div className='text-white'>
                    <h3 className='text-lg font-semibold'>+88-017-XXX-XXXXX</h3>
                    <h3 className='text-lg font-semibold'>care@travelbliss.com</h3>
                    <p className='text-md'>
                        Dedicated Customer Support<br/>
                        Sat-Thurs: 9AM-9PM<br/>
                        Friday/Govt. Holidays: 10AM-6PM
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;