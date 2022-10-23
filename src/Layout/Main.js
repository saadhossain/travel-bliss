import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
//Data context to provide destination and blogs data across the website
export const DataContext = createContext()
const Main = () => {
    const { destinations, blogs } = useLoaderData();
    const dataInfo = {destinations, blogs};
    return (
        <div>
            <DataContext.Provider value={dataInfo}>
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </DataContext.Provider>
        </div>
    );
};

export default Main;