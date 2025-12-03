import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router";

const My_Profile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="flex justify-center items-center min-h-screen bg-base-200 p-4">
            <title>My Profile</title>
            <div className="card bg-base-100 shadow-xl p-6 w-full max-w-md">
                
                <div className="flex flex-col items-center">
                    {/* User Image */}
                    <img
                        src={user?.photoURL || "https://i.ibb.co/Zx0Tn5n/user.png"}
                        alt="User"
                        className="w-32 h-32 rounded-full border shadow-md object-cover"
                    />

                    {/* User Name */}
                    <h2 className="text-2xl font-bold mt-4">
                        {user?.displayName || "No Name Found"}
                    </h2>

                    {/* User Email */}
                    <p className="text-lg text-gray-600 mt-1">
                        {user?.email}
                    </p>

                    {/* Update Button */}
                    <Link to={"/update-profile"} className="btn btn-accent text-base-100 mt-6 w-full">
                        Update Profile
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default My_Profile;
