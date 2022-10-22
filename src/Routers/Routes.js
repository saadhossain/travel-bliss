import { createBrowserRouter } from "react-router-dom";
import Booking from "../Components/Booking/Booking";
import Home from "../Components/Home/Home";
import Hotels from "../Components/Hotels/Hotels";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Main from '../Layout/Main';
export const routes = createBrowserRouter([
    {
        path: '/', element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch('https://travel-bliss-server.vercel.app/destinations'),
                element: <Home></Home>
            },
            {
                path: '/hotels/:id',
                loader: ({ params }) => fetch(`https://travel-bliss-server.vercel.app/hotels/${params.id}`),
                element: <Hotels></Hotels>
            },
            { path: '/login', element: <Login></Login> },
            { path: '/register', element: <Register></Register> },
            { path: '/booking', element: <Booking></Booking> }
        ]
    }
])