import { ArrowRightOnRectangleIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assests/airplane.png';
import { AuthContext } from '../../Context/AuthProvider';
const Header = () => {
    const [expand, setExpand] = useState(false);
    const { user, logOut } = useContext(AuthContext);
    //Handle logout
    const handleLogOut = () => {
        logOut()
    }
    return (
        <div className='bg-tbliss text-white py-2'>
            <div className='w-10/12 mx-auto flex justify-between items-center'>
                <Link to='/' className='flex items-center gap-2'>
                    <img src={logo} alt='Branding' className='h-10 w-10' />
                    <h1 className='text-3xl font-bold'>TravelBliss</h1>
                </Link>
                <div className='flex gap-3 items-center'>
                    <ul className={`font-semibold md:flex items-center gap-3 bg-tbliss py-2 px-10 absolute md:static duration-500 ease-in-out ${expand ? 'top-10 right-0' : 'top-[-200px] right-0'}`}>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/booking'>Booking</Link></li>
                        <li><Link to='/blogs'>Blog</Link></li>
                        {
                            user?.uid
                                ? <>
                                    <Link to='/profile'><img src={user?.uid ? user.photoURL : 'https://i.ibb.co/SnmKHRW/user-image.png'}  alt='User Profile' className='w-8 rounded-full'/></Link>
                                    <li onClick={handleLogOut} className='cursor-pointer'><ArrowRightOnRectangleIcon className='h-6 w-6'></ArrowRightOnRectangleIcon></li>
                                </>
                                : <li><Link to='/login'>Login</Link></li>
                        }
                    </ul>
                    <div className='h-6 w-6 md:hidden' onClick={() => setExpand(!expand)}>
                        {
                            expand ? <XMarkIcon></XMarkIcon> : <Bars3Icon></Bars3Icon>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;