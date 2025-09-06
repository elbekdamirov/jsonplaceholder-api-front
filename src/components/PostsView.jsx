import React from "react";

const PostsView = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {data?.map((post) => (
        <div
          key={post.id}
          className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            {post.title}
          </h3>
          <p className="text-gray-600">{post.body}</p>
          <span className="inline-block mt-3 text-xs text-gray-500">
            Post ID: {post.id}
          </span>
        </div>
      ))}
    </div>
  );
};

export default PostsView;
