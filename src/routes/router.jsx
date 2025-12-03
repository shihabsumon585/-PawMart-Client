import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../components/Home";
import Services from "../components/Services";
import My_Profile from "../components/My_Profile";
import ViewDetails from "../components/ViewDetails";
import Login from "../components/Login";
import Register from "../components/Register";
import PrivateRoutes from "../provider/PrivateRoutes";
import ForgotPassword from "../components/ForgotPassword";
import UpdateProfile from "../components/UpdateProfile";

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
               path: "/services",
               element: <Services></Services>
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
    }
])
export default router;