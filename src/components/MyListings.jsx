import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link } from 'react-router';

const MyListings = () => {
    const [selectedData, setSelectedData] = useState(null);

    const [myDatas, setMyDatas] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:3000/listing?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyDatas(data))
    }, [user?.email])

    const handleUpdate = (myData) => {
        setSelectedData(myData);
        document.getElementById('my_modal_5').showModal();
    }

    const handleModalSave = async (event) => {
        event.preventDefault();
        console.log(event);
        const form = event.target;
        // const name = event.target.name.value;
        // const category = event.target.category.value;
        // const price = event.target.price.value;
        // const location = event.target.location.value;
        // const description = event.target.description.value;
        // const image = event.target.image.value;
        // const email = event.target.email.value;
        // const date = event.target.date.value;

        const updatedInfo = {
            name: form.name.value,
            category: form.category.value,
            price: form.price.value,
            location: form.location.value,
            description: form.description.value,
            image: form.image.value,
            email: form.email.value,
            date: form.date.value,
        };

        const id = selectedData?._id;

        const res = await fetch(`http://localhost:3000/listing/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedInfo),
        })
        const data = await res.json();
        const updateList = myDatas.map(myData => myData._id == id ? { ...myData, ...updatedInfo } : myData)
        setMyDatas(updateList);
        document.getElementById("my_modal_5").close();
    };

    const handleDelete = async (id) => {
        const res = await fetch(`http://localhost:3000/listing/${id}`, {
            method: "DELETE",
        })
        const data = await res.json();
        if (data) {
            const filteredData = myDatas.filter(myData => myData?._id != id)
            setMyDatas(filteredData);
        } else {
            alert("Delete failed" + data.message)
        }
    }
    return (
        <div className=' mx-auto mt-10'>
            <div className="overflow-x-auto flex justify-center text-center">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Serial No</th>
                            <th>Name</th>
                            <th>Location & Price</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    {
                        myDatas.map((myData, index) => <tbody key={myData._id} >
                            <tr>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={myData?.image}
                                                    alt={myData?.name} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{myData?.name}</div>
                                            <div className="text-sm opacity-50">{myData?.category}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className='flex flex-col justify-start'>
                                    <span>{myData?.location}</span>
                                    <span className="badge badge-ghost badge-sm">{myData?.price ? "Price: " : ""}{myData?.price} {myData?.price ? "$" : ""}</span>
                                </td>
                                <td>{myData?.date}</td>
                                <th className='space-x-2'>
                                    <button onClick={() => handleUpdate(myData)} className="btn btn-neutral btn-xs">Update</button>

                                    <button onClick={() => handleDelete(myData?._id)} className="btn btn-warning text-white btn-xs">Delete</button>
                                </th>
                            </tr>
                        </tbody>)
                    }
                </table>
            </div>

            <dialog id="my_modal_5" className="modal">
                <div className="modal-box w-full">
                    <div className="">
                        <div className="bg-white p-6 rounded-lg ">
                            <h2 className="text-lg font-bold mb-4">Update Item</h2>

                            <form onSubmit={handleModalSave} className="space-y-4  mx-auto bg-white p-6 shadow rounded">
                                {/* Name */}
                                <div>
                                    <label className="font-semibold">Pet Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Product/Pet Name"
                                        className="input input-bordered w-full"
                                        defaultValue={selectedData?.name}
                                    />
                                </div>

                                {/* Category */}
                                <div>
                                    <label className="font-semibold">Category</label>
                                    <select
                                        name="category"
                                        className="select select-bordered w-full"
                                        defaultValue={selectedData?.category}
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
                                        defaultValue={selectedData?.price}
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
                                        defaultValue={selectedData?.location}
                                    />
                                </div>

                                {/* Description */}
                                <div>
                                    <label className="font-semibold">Description</label>
                                    <textarea
                                        name="description"
                                        placeholder="Short description"
                                        className="textarea textarea-bordered w-full"
                                        defaultValue={selectedData?.description}
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
                                        defaultValue={selectedData?.image}
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
                                        defaultValue={selectedData?.email}
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
                                        defaultValue={selectedData?.date}
                                    />
                                </div>
                                <div className="flex justify-end gap-2 mt-4">
                                    <button type='button' onClick={() => document.getElementById('my_modal_5').close()} className='btn'>close</button>
                                    <button
                                        className="btn btn-primary"
                                        type='submit'
                                        // onClick={() => handleModalSave(selectedData?._id)}
                                    >
                                        Save
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    );
};
export default MyListings;
