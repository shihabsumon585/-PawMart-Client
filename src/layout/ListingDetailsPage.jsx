import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ListingDetails from "../components/ListingDetails";
import OrderModal from "../components/OrderModal";


const ListingDetailsPage = () => {
    const { id } = useParams();
    const [listing, setListing] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    useEffect(() => {
        fetch(`https://paw-mart-server-bay.vercel.app/listing/${id}`)
            .then(res => res.json())
            .then(data => setListing(data));
    }, [id]);

    if (!listing) return <div className="text-center py-10">Loading...</div>;

    return (
        <div>
            
            <ListingDetails 
                listing={listing}
                setIsModalOpen={setIsModalOpen}
            />

            <OrderModal
                listing={listing}
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
            />
        </div>
    );
};

export default ListingDetailsPage;
