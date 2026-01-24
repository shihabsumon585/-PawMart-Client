import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import PrivateRoutes from "../provider/PrivateRoutes";
import PetsSupplies from "../components/Services";
import AddListing from "../components/AddListing";
import MyListings from "../components/MyListings";
import MyOrder from "../components/MyOrder";
import NotFound from "../components/NotFound";
import CategoryWiseCard from "../components/CategoryWiseCard";
import ListingDetailsPage from "../layout/ListingDetailsPage";
import About from "../components/About";
import Contact from "../components/Contact";
import Terms from "../components/Terms";
import Blog from "../components/Blog";
import Profile from "../components/Profile";
import DashboardLayout from "../layout/DashboardLayout";
import DashboardHome from "../components/DashboardHome";

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
                path: "/listing-details/:id",
                element: <ListingDetailsPage></ListingDetailsPage>
            },
            {
                path: "/category-filtered-product/:category",
                loader: ({params}) => fetch(`https://paw-mart-server-bay.vercel.app/category-filtered-product/${params.category}`),
                element: <CategoryWiseCard></CategoryWiseCard>
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
                path: "/about",
                element: <About></About>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/terms",
                element: <Terms></Terms>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/profile",
                element: <Profile></Profile>
            }
        ]
    },
    {
        path: "dashboard",
        element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
        children: [
            {
                index: true,
                element: <DashboardHome></DashboardHome>
            },
            {
                path: "add-listing",
                element: <AddListing></AddListing>
            },
            {
                path: "my-listings",
                element: <MyListings></MyListings>
            },
            {
                path: "my-order",
                element: <MyOrder></MyOrder>
            }
        ]
    },
    {
        path: "*",
        Component: NotFound
    }
])
export default router;