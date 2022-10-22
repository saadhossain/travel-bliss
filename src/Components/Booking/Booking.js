import React from 'react';

const Booking = () => {
    return (
        <div className='flex justify-center mt-10'>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-tbliss text-white">
                <h1 className="text-2xl font-bold text-center">Confirm your Booking</h1>
                <form novalidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-md">
                        <label htmlFor="fullname" className="block">Full Name</label>
                        <input type="text" name="fullname" id="fullname" placeholder="Full Name" className="w-full px-4 py-3 rounded-md bg-white text-gray-700 focus:dark:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-md">
                        <label htmlFor="email" className="block">Email</label>
                        <input type="email" name="email" id="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-md bg-white text-gray-700 focus:dark:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-md">
                        <label htmlFor="phone" className="block">Phone Number</label>
                        <input type="tel" name="phone" id="phone" placeholder="Phone Number" className="w-full px-4 py-3 rounded-md bg-white text-gray-700 focus:dark:border-violet-400" />
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <label htmlFor="phone" className="block text-md font-bold">Check-in Date</label>
                            <input type="date" name="phone" id="phone" placeholder="Phone Number" className="w-full px-4 py-3 rounded-md bg-white text-gray-700 focus:dark:border-violet-400" />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-md font-bold">Check-out Date</label>
                            <input type="date" name="phone" id="phone" placeholder="Phone Number" className="w-full px-4 py-3 rounded-md bg-white text-gray-700 focus:dark:border-violet-400" />
                        </div>
                    </div>
                    <button className="block w-full p-3 text-center rounded-sm font-bold bg-tbliss2nd">Confirm</button>
                </form>
            </div>
        </div>
    );
};

export default Booking;