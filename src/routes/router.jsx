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
                path: "/listing-details/:id",
                element: <PrivateRoutes><ListingDetailsPage></ListingDetailsPage></PrivateRoutes>
            },
            {
                path: "/category-filtered-product/:category",
                loader: ({params}) => fetch(`http://localhost:3000/category-filtered-product/${params.category}`),
                element: <CategoryWiseCard></CategoryWiseCard>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    },
    {
        path: "*",
        Component: NotFound
    }
])
export default router;