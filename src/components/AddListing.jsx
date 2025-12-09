import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';

const AddListing = () => {

    const { user } = useContext(AuthContext);

    const handleAddListing = (e) => {
        e.preventDefault();

        const product = e.target.name.value;
        const category = e.target.category.value;
        const price = e.target.price.value;
        const location = e.target.location.value;
        const description = e.target.description.value;
        const imageURL = e.target.image.value;
        const email = e.target.email.value;
        const date = e.target.date.value;
        e.target.reset();

        const newProduct = {
            "name": product,
            "category": category,
            "price": price,
            "location": location,
            "description": description,
            "image": imageURL,
            "email": email,
            "date": date
        };

        fetch("https://paw-mart-server-bay.vercel.app/listing", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(newProduct)
        });
        toast("Your product added...")
    }

    return (
        <div>
            <ToastContainer></ToastContainer>
            <title>Add Listing</title>
            <h1 className='text-4xl text-blue-900 text-center font-bold mt-10'>Add Listing</h1>
            <form onSubmit={handleAddListing} className="space-y-4 max-w-xl mx-auto bg-white p-6 shadow rounded">
                {/* Name */}
                <div>
                    <label className="font-semibold">Pet Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Product/Pet Name"
                        className="input input-bordered w-full"
                    />
                </div>

                {/* Category */}
                <div>
                    <label className="font-semibold">Category</label>
                    <select
                        name="category"
                        className="select select-bordered w-full"
                        defaultValue=""
                    >
                        <option disabled value="">
                            Select Category
                        </option>
                        <option value="Pets">Pets</option>
                        <option value="Food">Food</option>
                        <option value="Accessories">Accessories</option>
                        <option value="Care Products">Care Products</option>
                    </select>
                </div>

                {/* Price */}
                <div>
                    <label className="font-semibold">Price</label>
                    <input
                        type="number"
                        name="price"
                        placeholder="0"
                        className="input input-bordered w-full"
                    />
                </div>

                {/* Location */}
                <div>
                    <label className="font-semibold">Location</label>
                    <input
                        type="text"
                        name="location"
                        placeholder="Address"
                        className="input input-bordered w-full"
                    />
                </div>

                {/* Description */}
                <div>
                    <label className="font-semibold">Description</label>
                    <textarea
                        name="description"
                        placeholder="Short description"
                        className="textarea textarea-bordered w-full"
                    ></textarea>
                </div>

                {/* Image URL */}
                <div>
                    <label className="font-semibold">Image URL</label>
                    <input
                        type="text"
                        name="image"
                        placeholder="https://exampleimage.jpg"
                        className="input input-bordered w-full"
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="font-semibold">Owner Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="owner@gmail.com"
                        className="input input-bordered w-full"
                        defaultValue={user?.email}
                        readOnly
                    />
                </div>

                {/* Date */}
                <div>
                    <label className="font-semibold">Post Date</label>
                    <input
                        type="date"
                        name="date"
                        className="input input-bordered w-full"

                    />
                </div>

                {/* Submit Button */}
                <button className="btn btn-primary w-full">Submit</button>
            </form>
        </div>
    );
};

export default AddListing;