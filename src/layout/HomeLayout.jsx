import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';

const HomeLayout = () => {
    return (
        <div className='min-h-screen flex flex-col relative'> 
            <header className='w-11/12 mx-auto'>
                <Navbar></Navbar>
            </header>
            <main className='flex-grow w-11/12 mx-auto'>
                <Outlet></Outlet>
            </main>
            <footer className='w-11/12 mx-auto'>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;