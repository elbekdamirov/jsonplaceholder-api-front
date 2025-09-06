import React from "react";

const UsersView = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {data?.map((user) => (
        <div
          key={user.id}
          className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition"
        >
          <strong className="block text-lg font-semibold text-gray-800">
            {user.name}
          </strong>
          <p className="text-gray-600 mt-2">{user.email}</p>
          <span className="inline-block mt-3 text-sm text-blue-600 underline cursor-pointer">
            {user.website}
          </span>
        </div>
      ))}
    </div>
  );
};

export default UsersView;
