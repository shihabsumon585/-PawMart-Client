import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router";
import {
  LayoutDashboard,
  PlusCircle,
  List,
  ShoppingBag,
  LogOut,
  Home,
} from "lucide-react";
import { AuthContext } from "../provider/AuthProvider";

const Asidebar = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut();
    navigate("/");
  };

  const navItemClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg transition-all
     ${isActive
      ? "bg-primary text-white"
      : "text-base-content hover:bg-base-200"
    }`;

  return (
    <div className="h-screen flex flex-col justify-between p-4">
      {/* TOP */}
      <div>
        <h2 className="text-2xl font-bold text-primary mb-8">
          Dashboard
        </h2>

        <ul className="space-y-2">
          <li>
            <NavLink to="/dashboard" className={navItemClass}>
              <LayoutDashboard size={20} />
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/add-listing" className={navItemClass}>
              <PlusCircle size={20} />
              Add Listing
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/my-listings" className={navItemClass}>
              <List size={20} />
              My Listing
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/my-order" className={navItemClass}>
              <ShoppingBag size={20} />
              My Order
            </NavLink>
          </li>
        </ul>
      </div>

      {/* BOTTOM */}
      <div className="space-y-2">
        <NavLink to="/" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-base-200">
          <Home size={20} />
          Back to Home
        </NavLink>

        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-500 hover:bg-red-100"
        >
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Asidebar;
