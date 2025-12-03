
import { Link } from 'react-router';

const ServicesCard = ({ service }) => {
    // console.log(service);

    return (
        <div className="card bg-base-100 w-full shadow-sm space-y-4 ">

            <figure>
                <img
                    className='w-full h-[200px] object-cover'
                    src={service.image}
                    alt={service.serviceName} />
            </figure>
            <div className="space-y-2 p-4">
                <h2 className="text-xl font-bold">{service.serviceName}</h2>
                <p className='text-black'>{service.description}</p>
                <div >
                    <div className='flex justify-between  font-semibold'>
                        <p className='px-3 py-1 rounded-full bg-yellow-100'>Price: {service.price} $</p>
                        <p className='px-3 py-1 rounded-full bg-pink-100'>Rating: {service.rating}</p>
                    </div>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/view-details/${service?.serviceId}`} className="btn btn-primary w-full">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;