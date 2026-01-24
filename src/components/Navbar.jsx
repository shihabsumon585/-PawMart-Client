import React, { useContext, useState } from "react";
import logoImg from "../assets/logo.png";
import { Link, NavLink } from "react-router";
import "./Navbar.css";
import { AuthContext } from "../provider/AuthProvider";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const Navbar = () => {
    const { theme, setTheme } = useTheme();
    const { user, logOut } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);

    const links = (
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/pets&supplies">Pets & Supplies</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/terms">Terms & Condition</NavLink></li>

            {user?.email && (
                <>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/blog">Blogs</NavLink></li>
                    {/* <li><NavLink to="/add-listing">Add Listing</NavLink></li>
                    <li><NavLink to="/my-listings">My Listings</NavLink></li>
                    <li><NavLink to="/my-order">My Orders</NavLink></li> */}
                </>
            )}
        </>
    );

    const handleLogOut = () => {
        logOut();
    };

    return (
        <div className="navbar bg-base-100 shadow-sm font-semibold">
            {/* LEFT */}
            <div className="navbar-start">
                <div className="dropdown">
                    <button
                        className="btn btn-ghost lg:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </button>

                    {isOpen && (
                        <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-50">
                            {links}
                        </ul>
                    )}
                </div>

                <img className="w-16" src={logoImg} alt="logo" />
                <h1 className="ml-2 text-2xl font-bold text-primary">Paw<span className="text-accent">Mart</span></h1>
            </div>

            {/* CENTER */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{links}</ul>
            </div>

            {/* RIGHT */}
            <div className="navbar-end">
                {/* Theme Toggle */}
                <div className="mr-6">
                    <button
                        className="p-1 rounded-full"
                        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                    >
                        {theme === "light" ? <Moon size={28} /> : <Sun size={28} />}
                    </button>
                </div>

                {/* USER */}
                {user?.email ? (
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button">
                            <img
                                title={user?.displayName}
                                className="w-12 mr-4 rounded-full object-cover cursor-pointer"
                                src={user?.photoURL}
                                alt="user"
                            />
                        </div>

                        <ul
                            tabIndex={0}
                            className="menu dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-50"
                        >
                            <li><Link to="/profile">Profile</Link></li>
                            <li><Link to="/dashboard">Dashboard</Link></li>
                            <li><button onClick={handleLogOut}>Logout</button></li>
                        </ul>
                    </div>
                ) : (
                    <>
                        <Link to="/login" className="btn btn-primary">
                            Login
                        </Link>
                        <Link to="/register" className="btn btn-outline ml-2">
                            Register
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;
