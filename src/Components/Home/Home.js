import React from 'react';
import './Home.css';
import HomePackages from './HomePackages';
const Home = () => {
    return (
        <div>
            {/* Home Banner Section */}
            <div className='home-banner pt-[40%] md:pt-40'>
                <h1 className='text-4xl md:text-8xl font-bold text-white'>Enjoy Your Dream Travel Destination</h1>
                <h3 className='text-2xl md:text-5xl font-bold text-tbliss mt-5'>with Travel Bliss</h3>
                <button className='bg-tbliss text-white font-semibold rounded py-3 px-5 my-5 duration-500 ease-in-out hover:bg-tbliss2nd'>Book Now</button>
            </div>
            <div className='w-10/12 mx-auto py-10'>
                <HomePackages></HomePackages>
            </div>
        </div>
    );
};

export default Home;