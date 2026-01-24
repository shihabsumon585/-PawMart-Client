import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Pencil } from "lucide-react";

const Profile = () => {
  const { user } = useContext(AuthContext);

  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState(null);


  console.log(user?.email)

  useEffect(() => {
    if (!user?.email) return;

    fetch(`https://paw-mart-server-bay.vercel.app/users/${user?.email}`)
      .then(res => res.json())
      .then(data => setUserInfo(data))
      .catch(error => console.log(error));
  }, [user?.email]);
  console.log(userInfo?._id)


  const handleEdit = async (event) => {
    event.preventDefault();
    const form = event.target;

    const updatedInfo = {
      name: form.name.value || "",
      email: user?.email || "",
      photo: form.photo.value || "",
      contact: form.contact.value || "",
      address: form.address.value || ""
    };

    const id = userInfo?._id;


    const res = await fetch(`https://paw-mart-server-bay.vercel.app/users/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedInfo),
    })
    const data = await res.json();
    setUserInfo(updatedInfo);
    setIsEditing(false);


    // const updateList = myDatas.map(myData => myData._id == id ? { ...myData, ...updatedInfo } : myData)
    // setMyDatas(updateList);
    // document.getElementById("my_modal_5").close();
    // toast("Your information updated!");
  };

  return (
    <div className="max-w-4xl mx-auto bg-base-100 rounded-xl shadow p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">My Profile</h2>

        <button
          onClick={() => setIsEditing(!isEditing)}
          className="btn btn-sm btn-outline flex items-center gap-2"
        >
          <Pencil size={16} />
          {isEditing ? "Cancel" : "Edit Profile"}
        </button>
      </div>

      <form onSubmit={handleEdit} className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Image */}
        <div className="flex flex-col items-center gap-3">
          <img
            src={user?.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
            alt="profile"
            className="w-40 h-40 rounded-full object-cover border"
          />

          {isEditing && (
            <input
              type="text"
              name="photo"
              defaultValue={userInfo?.photo}
              placeholder="Add image URL"
              className="input input-bordered w-full"
            />
          )}
        </div>

        {/* Profile Info */}
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name */}
          <div>
            <label className="label">Name</label>
            {isEditing ? (
              <input
                type="text"
                name="name"
                defaultValue={userInfo?.name}
                placeholder="Add your name"
                className="input input-bordered w-full"
              />
            ) : (
              <p className="p-2 bg-base-200 rounded">
                {userInfo?.name || "Add your name"}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="label">Email</label>
            <p className="p-2 bg-base-200 rounded">
              {userInfo?.email}
            </p>
          </div>

          {/* Phone */}
          <div>
            <label className="label">Contact Number</label>
            {isEditing ? (
              <input
                type="number"
                name="contact"
                defaultValue={userInfo?.contact}
                placeholder="Add your contact number"
                className="input input-bordered w-full"
              />
            ) : (
              <p className="p-2 bg-base-200 rounded">
                {userInfo?.contact || "Add your contact number"}
              </p>
            )}
          </div>

          {/* Address */}
          <div>
            <label className="label">Address</label>
            {isEditing ? (
              <input
                type="text"
                name="address"
                defaultValue={userInfo?.address}
                placeholder="Add your address"
                className="input input-bordered w-full"
              />
            ) : (
              <p className="p-2 bg-base-200 rounded">
                {userInfo?.address || "Add your address"}
              </p>
            )}
          </div>
        </div>

        {/* Save Button */}
        {isEditing && (
          <div className="md:col-span-3 flex justify-end mt-4">
            <button type="submit" className="btn btn-primary">
              Save Changes
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Profile;
