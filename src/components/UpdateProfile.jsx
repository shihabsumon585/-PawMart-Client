import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { toast, Toaster } from 'react-hot-toast';

const UpdateProfile = () => {
    const { updateUser, user, setUser } = useContext(AuthContext);
    const handleUpdate = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        updateUser({displayName: name, photoURL: photo})
            .then((result) => {
                console.log(result);
                setUser({...user, displayName: name, photoURL: photo})
                e.target.reset();
                toast("Profile update succesfull");
            })
            .catch()
    }
    return (
        <div>
            <Toaster></Toaster>
            <title>Update Profile</title>
            <h1 className='text-2xl text-center font-bold my-10'>Update Your Profile</h1>
            <form onSubmit={handleUpdate} className='flex justify-center'>
                <fieldset className="fieldset *:w-80">
                    {/* Name */}
                    <label className="label">Name</label>
                    <input name='name' type="text" className="input" placeholder="Enter your name" />
                    {/* password */}
                    <label className="label">Photo URL</label>
                    <input name='photo' type="text" className="input" placeholder="Enter your image link" />

                    <button type='submit' className="btn bg-accent text-base-100 mt-4">Update</button>
                </fieldset>
            </form>
        </div>
    );
};

export default UpdateProfile;