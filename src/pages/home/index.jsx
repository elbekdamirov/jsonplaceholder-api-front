import React from "react";
import { useFetch } from "../../hooks/useFetch";
import UsersView from "../../components/UsersView";

const Home = () => {
  const { data, error, loading } = useFetch("/users");

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Users</h2>

      <UsersView data={data} />
    </div>
  );
};

export default Home;
