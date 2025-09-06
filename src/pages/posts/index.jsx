import React from "react";
import { useFetch } from "../../hooks/useFetch";
import PostsView from "../../components/PostsView";

const Home = () => {
  const { data, error, loading } = useFetch("/posts");

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Posts</h2>

      <PostsView data={data} />
    </div>
  );
};

export default Home;
