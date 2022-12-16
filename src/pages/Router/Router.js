import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../Main/Main";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/users/:id',
                element: <Home></Home>,
                loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`)
            }
        ]
    }
])
