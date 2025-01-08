import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const MyAppointments = () => {
  const { doctors } = useContext(AppContext);

  return (
    <div className="p-4 min-h-screen">
      <h1 className="text-xl font-bold text-center mb-4">My Appointments</h1>
      <div className="space-y-4">
        {doctors.slice(0, 3).map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-center bg-white shadow rounded-lg p-3 border border-gray-200"
          >
            {/* Image */}
            <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0">
              <img
                src={item.image}
                alt={item.name}
                className="object-cover w-full h-full rounded-md"
              />
            </div>

            {/* Details */}
            <div className="flex-1 mt-3 sm:mt-0 sm:ml-4 text-center sm:text-left">
              <h2 className="text-base font-semibold">{item.name}</h2>
              <p className="text-sm text-gray-500">{item.speciality}</p>
              <p className="text-sm font-medium text-gray-700 mt-2">Address:</p>
              <p className="text-sm text-gray-600">{item.address.line1}</p>
              <p className="text-sm text-gray-600">{item.address.line2}</p>
              <p className="text-sm text-gray-600 mt-2">
                <span className="font-medium">Date & Time: </span>25, July, 2024
                || 8:30 PM
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-row sm:flex-col space-x-2 sm:space-x-0 sm:space-y-2 mt-3 sm:mt-0">
              <button className="px-3 py-1 text-white bg-blue-500 rounded text-xs sm:text-sm hover:bg-blue-600 transition">
                Pay Online
              </button>
              <button className="px-3 py-1 text-white bg-red-500 rounded text-xs sm:text-sm hover:bg-red-600 transition">
                Cancel Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;
