import React from 'react';
import { Link } from 'react-router-dom';

const TourPackages = ({ destination }) => {
    const { id, name, image, description, price, rating } = destination;
    return (
        <div>
            <div className="flex flex-col max-w-lg space-y-6 overflow-hidden rounded-lg shadow-lg dark:bg-[#F8F8F8] dark:text-gray-100">
                <img src={image} alt="" className="object-cover w-full h-40 sm:h-72 dark:bg-gray-500" />
                <div className='px-5 pb-3'>
                    <h2 className="text-2xl font-bold text-tbliss">{name}</h2>
                    <p className="text-md text-black text-left">{description.length > 230 ? description.slice(0, 230) + '...' : description}</p>
                    <div className="flex flex-wrap justify-between">
                        <div className="space-x-2">
                            <h2 className="mb-1 text-xl font-semibold text-tbliss2nd">Starting : <span className='text-tbliss'>${price}</span><small> /per person</small></h2>
                        </div>
                        <div className="flex space-x-2 text-sm dark:text-gray-400">
                            <button type="button" className="flex items-center p-1 space-x-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                </svg>
                                <span>{rating.rate}</span>
                            </button>
                            <button type="button" className="flex items-center p-1 space-x-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                                </svg>
                                <span>{rating.total}</span>
                            </button>
                            <button type="button" className="flex items-center p-1 space-x-1.5 text-tbliss font-bold">
                                <Link to={`/hotels/${id}`} className='flex items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                                    </svg>
                                    <span>Book</span>
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TourPackages;