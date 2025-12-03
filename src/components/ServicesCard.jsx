
import { FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router';

const ServicesCard = ({ service }) => {
    return (
        <div className="card bg-base-100 w-full shadow-sm space-y-4 ">
            <figure>
                <img
                    className='w-full h-[200px] object-cover'
                    src={service?.image}
                    alt={service?.name} />
            </figure>
            <div className="space-y-2 p-4">
                <h2 className="text-xl font-bold">{service?.name}</h2>
                <p className='text-black flex items-center gap-1'> <FaLocationDot></FaLocationDot> {service?.location}</p>
                <div >
                    <div className='flex justify-between  font-semibold'>
                        <p className='px-3 py-1 rounded-full bg-yellow-100'>Price: {service?.price} $</p>
                        <p className='px-3 py-1 rounded-full bg-pink-100'>Category: {service?.category}</p>
                    </div>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/view-details/${service?._id}`} className="btn btn-primary w-full">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;