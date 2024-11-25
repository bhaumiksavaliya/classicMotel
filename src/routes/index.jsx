import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./defaultLayout/defaultLayout";
import Home from "../components/home";
import SignUp from "../components/form/signup";
import Login from "../components/form/login";
import Error from "../common/error";
import Category from "./category";
import FoodDetail from "../components/pages/classicfood/fooddetail";
import Cart from "../components/pages/classicfood/cart";
import Spa from "../components/pages/spa";
import Enquiry from "../components/enquiry";
import Gym from "../components/pages/gym";
const router = createBrowserRouter([
    {
        path: "/signup",
        element: <SignUp />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/:category",
                element: <Category />,
            },
            {
                path:"/fooddetail",
                element:<FoodDetail/>
            },
            {
                path:"/cart",
                element:<Cart/>
            },
            {
                path:"/spa",
                element:<Spa/>
            },
            {
                path:"/enquiry",
                element:<Enquiry/>
            },
            {
                path:"/gym",
                element:<Gym/>
            }
        ],
    },
    {
        path: "*",
        element: <Error />,
    },
]);

export default router;
