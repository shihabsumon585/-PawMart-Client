import React, { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

const MyOrder = () => {
    const { user } = useContext(AuthContext);
    const [myDatas, setMyDatas] = useState([]);
    const tableRef = useRef(null);

    const handlePDF = async () => {
        const element = tableRef.current; 

        const canvas = await html2canvas(element);
        const imgData = canvas.toDataURL("image/png");

        const pdf = new jsPDF("p", "mm", "a4");
        pdf.addImage(imgData, "PNG", 0, 0, 210, 0);

        pdf.save("Order List.pdf"); // kaj hocche na keno?
    }

    useEffect(() => {
        fetch(`http://localhost:3000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(datas => {
                setMyDatas(datas)
            })
    }, [user?.email])

    return (
        <div className=' mx-auto mt-10 bg-white' ref={tableRef}>
            <div className="overflow-x-auto flex justify-center text-center">
                <table className="table" >
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Serial No</th>
                            <th>Product/Pets</th>
                            <th>Buyer Details</th>
                            <th>Quantity</th>
                            <th>Date</th>
                        </tr>
                    </thead>

                    {
                        myDatas.map((myData, index) => <tbody  key={myData._id} >
                            <tr>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <div className="font-bold">{myData?.productName}</div>
                                            <div className="text-sm opacity-50">{myData?.price ? "Price: " : ""}{myData?.price} {myData?.price ? "$" : ""}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className='flex flex-col justify-start'>
                                    <span className='font-bold'>{myData?.buyerName}</span>
                                    <span className="badge badge-ghost badge-sm">{myData?.address}, {myData?.phone}</span>
                                </td>
                                <td className=''>{myData?.quantity}</td>
                                <td className='flex flex-col'>
                                    <span>{myData?.date}</span>
                                </td>
                            </tr>
                        </tbody>)
                    }
                </table>
            </div>
            <button onClick={handlePDF} className='btn btn-primary flex justify-center my-5 mx-auto'>Download Report</button>
        </div>
    );
};

export default MyOrder;