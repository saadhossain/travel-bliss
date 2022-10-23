import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BlogSingle = () => {
    const blog = useLoaderData()
    const {title, description, image } = blog;
    return (
        <div className='w-8/12 mx-auto py-10'>
            <div className=" rounded-md shadow-md bg-tbliss2nd text-white">
            <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">{title}</h2>
                    <p className="dark:text-gray-100">{description}</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default BlogSingle;