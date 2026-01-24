import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";

const OrderModal = ({ listing, isModalOpen, setIsModalOpen }) => {
    const { user } = useContext(AuthContext);

    const [formData, setFormData] = useState({
        address: "",
        date: "",
        phone: "",
        notes: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const orderData = {
            buyerName: user?.displayName,
            email: user?.email,
            productId: listing._id,
            productName: listing.name,
            quantity: listing.category === "pet" ? 1 : 1,
            price: listing.price,
            address: formData.address,
            date: formData.date,
            phone: formData.phone,
            notes: formData.notes
        };

        fetch("https://paw-mart-server-bay.vercel.app/orders", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(orderData)
        })
            .then(res => res.json())
            .then(() => {
                setIsModalOpen(false);
                toast("Your order confirm!");
            });
    };

    return (
        <>
            <ToastContainer></ToastContainer>
            <dialog className={`modal ${isModalOpen ? "modal-open" : ""}`}>
                <div className="modal-box max-w-xl">
                    <h3 className="font-bold text-2xl mb-4 text-center">
                        🛒 Order Information
                    </h3>

                    <form onSubmit={handleSubmit} className="space-y-4">

                        <label>User Name</label>
                        <input type="text" value={user?.displayName} className="input input-bordered w-full" readOnly />

                        <label>Email</label>
                        <input type="email" value={user?.email} className="input input-bordered w-full" readOnly />

                        <label>Listing ID</label>
                        <input type="text" value={listing._id} className="input input-bordered w-full" readOnly />

                        <label>Listing Name</label>
                        <input type="text" value={listing.name} className="input input-bordered w-full" readOnly />

                        <label>Quantity</label>
                        <input type="number" value={listing.category === "pet" ? 1 : 1} readOnly className="input input-bordered w-full" />

                        <label>Price</label>
                        <input type="number" value={listing.price} readOnly className="input input-bordered w-full" />

                        <label>Address</label>
                        <input
                            type="text"
                            placeholder="Address"
                            className="input input-bordered w-full"
                            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                            required
                        />

                        <label>Date</label>
                        <input
                            type="date"
                            className="input input-bordered w-full"
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            required
                        />

                        <label>Phone</label>
                        <input
                            type="text"
                            placeholder="Phone"
                            className="input input-bordered w-full"
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            required
                        />

                        <label>Additional Notes</label>
                        <textarea
                            className="textarea textarea-bordered w-full"
                            placeholder="Additional Notes"
                            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        ></textarea>


                        <button className="btn btn-primary w-full mt-3 text-lg">
                            Confirm Order
                        </button>
                    </form>

                    <div className="modal-action">
                        <button
                            className="btn"
                            onClick={() => setIsModalOpen(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default OrderModal;
