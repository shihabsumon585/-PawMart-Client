import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable';

const MyOrder = () => {
    const { user } = useContext(AuthContext);
    const [myDatas, setMyDatas] = useState([]);

    const handlePDF = () => {
        const doc = new jsPDF();
        
        doc.setFontSize(18);
        doc.text("Order List", 14, 20);
        doc.setFontSize(11);
        doc.text(`Generated: ${new Date().toLocaleDateString()}`, 14, 28);
        const tableData = myDatas.map((myData, index) => [
            index + 1,
            myData?.productName || 'N/A',
            myData?.price ? `$${myData.price}` : 'N/A',
            myData?.buyerName || 'N/A',
            `${myData?.address}, ${myData?.phone}`,
            myData?.quantity || 'N/A',
            myData?.date || 'N/A'
        ]);
        autoTable(doc, {
            startY: 35,
            head: [['#', 'Product/Pet', 'Price', 'Buyer', 'Address & Phone', 'Qty', 'Date']],
            body: tableData,
            theme: 'grid',
            styles: { 
                fontSize: 9,
                cellPadding: 3,
            },
            headStyles: { 
                fillColor: [87, 13, 248],
                textColor: 255,
                fontStyle: 'bold'
            },
            alternateRowStyles: {
                fillColor: [245, 245, 245]
            }
        });

        doc.save("Order_List.pdf");
    };

    useEffect(() => {
        fetch(`https://paw-mart-server-bay.vercel.app/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(datas => {
                setMyDatas(datas)
            })
    }, [user?.email])

    return (
        <div className='mx-auto mt-10 bg-white'>
            <title>My Orders</title>
            <div className="p-5 w-full bg-white">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Serial No</th>
                            <th>Product/Pets</th>
                            <th>Buyer Details</th>
                            <th>Quantity</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myDatas.map((myData, index) => (
                            <tr key={myData._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <div className="font-bold">{myData?.productName}</div>
                                            <div className="text-sm opacity-50">
                                                {myData?.price ? `Price: $${myData.price}` : ""}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className='flex flex-col justify-start'>
                                    <span className='font-bold'>{myData?.buyerName}</span>
                                    <span className="badge badge-ghost badge-sm">
                                        {myData?.address}, {myData?.phone}
                                    </span>
                                </td>
                                <td>{myData?.quantity}</td>
                                <td>
                                    <span>{myData?.date}</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <button onClick={handlePDF} className="btn btn-primary mx-auto my-5 flex">
                Download Report
            </button>
        </div>
    );
};

export default MyOrder;