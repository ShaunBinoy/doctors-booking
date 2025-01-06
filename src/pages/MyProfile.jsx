import React, { useState } from "react";
import { assets } from "../assets/assets";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Edward",
    image: assets.profile_pic,
    email: "richard@gmail.com",
    phone: "+912345 67890",
    address: {
      line1: "57th Highway",
      line2: "Kunnmakulam",
    },
    gender: "Male",
    dob: "2000-01-24",
  });

  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="flex flex-col items-center min-h-screen p-6">
      <div className=" p-6 w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
          <img
            src={userData.image}
            alt="Profile"
            className="w-24 h-24 rounded-full border-2 border-gray-300 mb-4"
          />
          {isEdit ? (
            <input
              type="text"
              value={userData.name}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, name: e.target.value }))
              }
              className="border rounded-md px-3 py-2 w-full text-center"
            />
          ) : (
            <p className="text-xl font-bold">{userData.name}</p>
          )}
        </div>
        <hr className="my-4" />
        <div className="mb-6">
          <p className="text-lg font-semibold mb-2">Contact Information</p>
          <div className="space-y-2">
            <p>
              <span className="font-semibold">Email ID:</span> {userData.email}
            </p>
            <p>
              <span className="font-semibold">Phone:</span>{" "}
              {isEdit ? (
                <input
                  type="text"
                  value={userData.phone}
                  onChange={(e) =>
                    setUserData((prev) => ({ ...prev, phone: e.target.value }))
                  }
                  className="border rounded-md px-3 py-2 w-full"
                />
              ) : (
                <span>{userData.phone}</span>
              )}
            </p>
            <p className="font-semibold">Address:</p>
            {isEdit ? (
              <div className="space-y-2">
                <input
                  type="text"
                  value={userData.address.line1}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line1: e.target.value },
                    }))
                  }
                  className="border rounded-md px-3 py-2 w-full"
                />
                <input
                  type="text"
                  value={userData.address.line2}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line2: e.target.value },
                    }))
                  }
                  className="border rounded-md px-3 py-2 w-full"
                />
              </div>
            ) : (
              <p>
                {userData.address.line1}
                <br />
                {userData.address.line2}
              </p>
            )}
          </div>
        </div>
        <div className="mb-6">
          <p className="text-lg font-semibold mb-2">Basic Information</p>
          <div className="space-y-2">
            <p>
              <span className="font-semibold">Gender:</span>{" "}
              {isEdit ? (
                <select
                  value={userData.gender}
                  onChange={(e) =>
                    setUserData((prev) => ({ ...prev, gender: e.target.value }))
                  }
                  className="border rounded-md px-3 py-2 w-full"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              ) : (
                <span>{userData.gender}</span>
              )}
            </p>
            <p>
              <span className="font-semibold">Birthday:</span>{" "}
              {isEdit ? (
                <input
                  type="date"
                  value={userData.dob}
                  onChange={(e) =>
                    setUserData((prev) => ({ ...prev, dob: e.target.value }))
                  }
                  className="border rounded-md px-3 py-2 w-full"
                />
              ) : (
                <span>{userData.dob}</span>
              )}
            </p>
          </div>
        </div>
        <div className="text-center">
          {isEdit ? (
            <button
              onClick={() => setIsEdit(false)}
              className="bg-green-500 text-white px-4 py-2 rounded-md shadow hover:bg-green-600"
            >
              Save
            </button>
          ) : (
            <button
              onClick={() => setIsEdit(true)}
              className="bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600"
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
