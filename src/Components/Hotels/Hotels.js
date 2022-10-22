import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HotelList from './HotelList';

const Hotels = () => {
    const hotels = useLoaderData();
    console.log(hotels);
    return (
        <div className='w-10/12 mx-auto py-5'>
            <div className='grid grid-cols-1 gap-10'>
                {
                    hotels.map(hotel => <HotelList key={hotel.id} hotel={hotel}></HotelList>)
                }
            </div>
        </div>

    );
};

export default Hotels;