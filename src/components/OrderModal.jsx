import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const OrderModal = ({ listing, isModalOpen, setIsModalOpen }) => {
    const { user } = useContext(AuthContext);

    const [formData, setFormData] = useState({
        address: "",
        date: "",
        phone: "",
        notes: ""
    });

// {
//   "productId": "65488adsfadf5454f",
//   "productName": "Golden Retriever Puppy",
//   "buyerName": "Mr. X",
//   "email": "buyer@gmail.com",
//   "quantity": 1,
//   "price": 0,
//   "address": "Chattogram",
//   "phone": "017xxxxxxx",
//   "date": "2025-10-27"
//   "additionalNotes": "Some Text"
// }

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

        fetch("http://localhost:3000/orders", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(orderData)
        })
        .then(res => res.json())
        .then(() => {
            setIsModalOpen(false);
            alert("Order Placed Successfully!");
        });
    };

    return (
        <>
            <dialog className={`modal ${isModalOpen ? "modal-open" : ""}`}>
                <div className="modal-box max-w-xl">
                    <h3 className="font-bold text-2xl mb-4 text-center">
                        🛒 Order Information
                    </h3>

                    <form onSubmit={handleSubmit} className="space-y-4">

                        <input type="text" value={user?.displayName} className="input input-bordered w-full" readOnly />
                        <input type="email" value={user?.email} className="input input-bordered w-full" readOnly />

                        <input type="text" value={listing._id} className="input input-bordered w-full" readOnly />
                        <input type="text" value={listing.name} className="input input-bordered w-full" readOnly />

                        <input type="number" value={listing.category === "pet" ? 1 : 1} readOnly className="input input-bordered w-full" />
                        <input type="number" value={listing.price} readOnly className="input input-bordered w-full" />

                        <input 
                            type="text" 
                            placeholder="Address"
                            className="input input-bordered w-full"
                            onChange={(e) => setFormData({...formData, address: e.target.value})}
                            required
                        />

                        <input 
                            type="date"
                            className="input input-bordered w-full"
                            onChange={(e) => setFormData({...formData, date: e.target.value})}
                            required
                        />

                        <input 
                            type="text" 
                            placeholder="Phone" 
                            className="input input-bordered w-full"
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            required
                        />

                        <textarea 
                            className="textarea textarea-bordered w-full" 
                            placeholder="Additional Notes"
                            onChange={(e) => setFormData({...formData, notes: e.target.value})}
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
