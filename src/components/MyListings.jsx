import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link } from 'react-router';

const MyListings = () => {
    const [ myDatas, setMyDatas ] = useState([]);
    console.log(myDatas);
    const { user } = useContext(AuthContext);
    useEffect(() => {
        fetch(`http://localhost:3000/listing?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setMyDatas(data))
    }, [user?.email])
    const handleUpdate = (e) => {
        console.log(e);
    }
    const handleDelete = async (id) => {
        const res = await fetch(`http://localhost:3000/listing/${id}`, {
            method: "DELETE",
        })
        const data = res.json();
        if(data){
            const filteredData = myDatas.filter(myData => myData?._id != id)
            setMyDatas(filteredData);
        } else {
            alert("Delete failed" + data.message)
        }
    }
    return (
        <div className=' mx-auto '>
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
                                    <span className="badge badge-ghost badge-sm">{ myData?.price ? "Price: " : ""}{myData?.price} { myData?.price ? "$" : ""}</span>
                                </td>
                                <td>{myData?.date}</td>
                                <th className='space-x-2'>
                                    <button onClick={() => handleUpdate(myData?._id)} className="btn btn-neutral btn-xs">Update</button>
                                    <button onClick={() => handleDelete(myData?._id)} className="btn btn-warning text-white btn-xs">Delete</button>
                                </th>
                            </tr>
                        </tbody>)
                    }
                </table>
            </div>
        </div>
    );
};

export default MyListings;