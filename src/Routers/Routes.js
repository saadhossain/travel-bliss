import { createBrowserRouter } from "react-router-dom";
import Booking from "../Components/Booking/Booking";
import Home from "../Components/Home/Home";
import Hotels from "../Components/Hotels/Hotels";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Main from '../Layout/Main'
export const routes = createBrowserRouter([
    {
        path:'/', element:<Main></Main>,
        children:[
            {
                path:'/',
                loader: () => fetch('http://localhost:5000/destinations'),
                element:<Home></Home>
            },
            {
                path:'/hotels/:id',
                loader: ({params})=> fetch(`http://localhost:5000/hotels/${params.id}`),
                element:<Hotels></Hotels>
            },
            {path:'/login', element:<Login></Login>},
            {path:'/register', element:<Register></Register>},
            {path:'/booking', element:<Booking></Booking>}
        ]
    }
])