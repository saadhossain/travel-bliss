import React, { useContext } from 'react';
import { DataContext } from '../../Layout/Main';
import DisplayBlogs from '../Blog/DisplayBlogs';
import './Home.css';
import TourPackages from './TourPackages';
const Home = () => {
    const {destinations, blogs} = useContext(DataContext);
    console.log(blogs);
    console.log(destinations);
    return (
        <div>
            {/* Home Banner Section */}
            <div className='home-banner pt-[40%] md:pt-40'>
                <h1 className='text-4xl md:text-8xl font-bold text-white'>Enjoy Your Vacations & Holidays</h1>
                <h3 className='text-2xl md:text-5xl font-bold text-tbliss mt-5'>with Travel Bliss</h3>
                <button className='bg-tbliss text-white font-semibold rounded py-3 px-5 my-5 duration-500 ease-in-out hover:bg-tbliss2nd'>Book Now</button>
            </div>
            <div className='w-10/12 mx-auto py-10'>
                <h2 className='text-4xl font-bold text-tbliss mb-5 text-center'>Top Turist Destination</h2>
                {/* Destinations */}
                <div className='grid md:grid-cols-2 gap-5 my-5'>
                    {
                        destinations.map(destination => <TourPackages key={destination.id} destination={destination}></TourPackages>)
                    }
                </div>
                {/* Blogs area */}
                <h2 className='text-4xl font-bold text-tbliss mb-5 text-center'>Latest Turism Gudies</h2>
                <div className='grid md:grid-cols-2 gap-5 my-5'>
                    {
                        blogs.map(blog => <DisplayBlogs key={blog.id} blog={blog}></DisplayBlogs>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;