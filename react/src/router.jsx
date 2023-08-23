import {createBrowserRouter} from "react-router-dom";
import Login from "./views/login";
import NotFound from "./views/NotFound";
import Signup from "./views/signup";
import Users from "./views/Users";

const router = createBrowserRouter([
    {
        path: '/Login',
        element: <Login />
    }, 

    {
        path: '/signup',
        element: <Signup />
    },

    {
        path: '/users',
        element: <Users />
    }, 

    {
        path: '*',
        element: <NotFound />
    },
])


export default router;