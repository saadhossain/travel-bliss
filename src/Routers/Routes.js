import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Hotels from "../Components/Hotels/Hotels";
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
                loader: ({params})=> fetch(`http://localhost:5000/destinations/${params.id}`),
                element:<Hotels></Hotels>
            }
        ]
    }
])