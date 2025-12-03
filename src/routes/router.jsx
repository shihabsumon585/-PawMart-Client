import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../components/Home";

import My_Profile from "../components/My_Profile";
import ViewDetails from "../components/ViewDetails";
import Login from "../components/Login";
import Register from "../components/Register";
import PrivateRoutes from "../provider/PrivateRoutes";
import ForgotPassword from "../components/ForgotPassword";
import UpdateProfile from "../components/UpdateProfile";
import PetsSupplies from "../components/Services";
import AddListing from "../components/AddListing";
import MyListings from "../components/MyListings";
import MyOrder from "../components/MyOrder";
import NotFound from "../components/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
               path: "/pets&supplies",
               element: <PetsSupplies></PetsSupplies>
            },
            {
               path: "/add-listing",
               element: <AddListing></AddListing>
            },
            {
               path: "/my-listings",
               element: <MyListings></MyListings>
            },
            {
               path: "/my-order",
               element: <MyOrder></MyOrder>
            },
            {
                path: "/my-profile",
                element: <PrivateRoutes><My_Profile></My_Profile></PrivateRoutes>
            },
            {
                path: "/view-details/:id",
                element: <PrivateRoutes><ViewDetails></ViewDetails></PrivateRoutes>,
                loader: () => fetch("/services.json")
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/forgot-password",
                element: <ForgotPassword></ForgotPassword>
            },
            {
                path: "/update-profile",
                element: <PrivateRoutes><UpdateProfile></UpdateProfile></PrivateRoutes>
            }
        ]
    },
    {
        path: "*",
        Component: NotFound
    }
])
export default router;