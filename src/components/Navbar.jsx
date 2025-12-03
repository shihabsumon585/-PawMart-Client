import React, { useContext, useState } from 'react';
import logoImg from "../assets/logo.png"
import { Link, NavLink } from 'react-router';
import "./Navbar.css"
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);    
    const links = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/services"}>Services</NavLink></li>
        <li><NavLink to={"/my-profile"}>My Profile</NavLink></li>
    </>    
    const handleLogOut = () => {
        logOut();
    }    
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <button 
                        type="button"
                        className="btn btn-ghost lg:hidden"
                        onClick={() => {
                            setIsOpen(!isOpen);
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
                        </svg>
                    </button>                    
                    <ul 
                        style={{ display: isOpen ? 'block' : 'none' }}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
                    >
                        {links}
                    </ul>
                </div>
                <img className='w-16' src={logoImg} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <img title={user?.displayName} className='w-12 mr-4 rounded-4xl' src={user?.photoURL} alt="" />                
                {user?.email ? <Link onClick={handleLogOut} className="btn btn-primary">Log Out</Link> : <Link to={"/login"} className="btn btn-primary">Login</Link>}
            </div>
        </div>
    );
};

export default Navbar;