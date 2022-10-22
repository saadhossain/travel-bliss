import React from 'react';

const HotelList = ({ hotel }) => {
    const { venue, name, image, description, feature, facilities, rating, location, cost } = hotel;

    const first5Facility = facilities.slice(0, 5);
    const restFacility = facilities.slice(5, -1)
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl flex-col md:flex-row">
                <figure><img src={image} alt={name} className='h-52 md:h-full w-[400px]' /></figure>
                <div className="card-body text-left">
                    <h2 className="card-title text-tbliss">{name}</h2>
                    <div className='flex items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        <span>{location}, <span className='text-tbliss font-bold'>{venue}</span></span>
                    </div>
                    <div className='flex gap-5 text-semibold'>
                        <span>Room: {feature.room}</span>
                        <span>Adult: {feature.adult}</span>
                        <span>Kids: {feature.kids}</span>
                    </div>
                    <p>{description.length > 200 ? description.slice(0, 200) : description}</p>
                    <div className='flex gap-10'>
                        <ul className='text-md font-semibold'>
                            {
                                first5Facility.map(facility => <li className='flex items-center gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {facility}</li>)
                            }
                        </ul>
                        <ul className='text-md font-semibold'>
                            {
                                restFacility.map(facility => <li className='flex items-center gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {facility}</li>)
                            }
                        </ul>
                    </div>
                    <div className='flex gap-5 justify-start'>
                        <span className='flex gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            </svg>
                            <span>{rating.rating}</span>
                        </span>
                        <span className='flex gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                            </svg>
                            <span>{rating.total}</span>
                        </span>
                    </div>
                    <h2 className="card-title text-tbliss2nd">Cost: <span className='text-tbliss'>${cost}</span>/<small>night</small></h2>
                    <div className="card-actions justify-end">
                        <button className="bg-tbliss text-white font-bold py-3 px-5 rounded-lg duration-500 ease-in-out hover:bg-tbliss2nd">Confirm Booking</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelList;