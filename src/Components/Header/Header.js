import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assests/airplane.png';
const Header = () => {
    return (
        <div className='bg-tbliss text-white py-2'>
            <div className='w-10/12 mx-auto flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <img src={logo} alt='Branding' className='h-10 w-10' />
                    <h1 className='text-3xl font-bold'>TravelBliss</h1>
                </div>
                <div>
                    <ul className='font-semibold md:flex gap-4'>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/destination'>Destinations</Link></li>
                        <li><Link to='/booking'>Booking</Link></li>
                        <li><Link to='/blogs'>Blog</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;