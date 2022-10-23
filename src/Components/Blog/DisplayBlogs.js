import React from 'react';
import { Link } from 'react-router-dom';

const DisplayBlogs = ({ blog }) => {
    const { id, title, description, image } = blog;
    return (
        <div className=" rounded-md shadow-md bg-tbliss2nd text-white">
            <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">{title}</h2>
                    <p className="dark:text-gray-100">{description.length> 300 ? description.slice(0, 300) + '...': description}</p>
                </div>
                <Link to={`/blogs/${id}`}>
                    <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-tbliss text-white">Read more</button>
                </Link>
            </div>
        </div>
    );
};

export default DisplayBlogs;