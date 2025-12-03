import React from 'react';
import { Link } from 'react-router';

const NotFound = () => {
    return (
        <div className='flex justify-center items-center flex-col min-h-screen gap-6'>
            <h1 className='text-center text-6xl text-blue-900 font-extrabold flex items-center justify-center'>404 Not Found</h1>
            <Link to={"/"} className='btn btn-primary flex items-center justify-center'>Back to Home</Link> {/* why is it line not working? */}
        </div>
    );
};

export default NotFound;