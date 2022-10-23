import { createBrowserRouter } from "react-router-dom";
import Blogs from "../Components/Blog/Blogs";
import BlogSingle from "../Components/Blog/BlogSingle";
import Booking from "../Components/Booking/Booking";
import Home from "../Components/Home/Home";
import Hotels from "../Components/Hotels/Hotels";
import Login from "../Components/Login/Login";
import Profile from "../Components/Profile/Profile";
import Register from "../Components/Register/Register";
import Main from '../Layout/Main';
import { BlogsAndDestinationLoader } from "../Loader/BlogsAndDestinationLoader";
import PrivateRoutes from "./PrivateRoutes";
export const routes = createBrowserRouter([
    {
        path: '/', element: <Main></Main>,
        loader: BlogsAndDestinationLoader,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/hotels/:id',
                loader: ({ params }) => fetch(`https://travel-bliss-server.vercel.app/hotels/${params.id}`),
                element: <PrivateRoutes><Hotels></Hotels></PrivateRoutes>
            },
            { path: '/login', element: <Login></Login> },
            { path: '/register', element: <Register></Register> },
            { path: '/booking', element: <PrivateRoutes><Booking></Booking></PrivateRoutes> },
            { path: '/profile', element: <PrivateRoutes><Profile></Profile></PrivateRoutes> },
            {path:'/blogs', element:<Blogs></Blogs>},
            {
                path:'/blogs/:id', 
                loader: ({params})=> fetch(`https://travel-bliss-server.vercel.app/blogs/${params.id}`),
                element:<BlogSingle></BlogSingle>
            }
        ]
    }
])