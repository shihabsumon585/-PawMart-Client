import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomeLayout = () => {
    return (
        <div className='min-h-screen flex flex-col bg-white dark:bg-black text-black dark:text-white w-11/12 mx-auto'>
            <header>
                <Navbar />
            </header>
            <main className='flex-grow'>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default HomeLayout;
