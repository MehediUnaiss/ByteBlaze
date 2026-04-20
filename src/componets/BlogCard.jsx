import React from "react";
import { Link } from "react-router";
import placeholderImg from "../assets/404.jpg";

const BlogCard = ({ blog }) => {
  return (
    <Link
      to={`/blog/${blog.id}`}
      className="max-w-sm mx-auto group border-2 transition hover:scale-105 border-primary hover:border-secondary hover:no-underline focus:no-underline dark:bg-gray-50"
    >
      <img
        role="presentation"
        className="object-cover w-full rounded h-44 dark:bg-gray-500"
        src={blog.cover_image || placeholderImg}
      />
      <div className="p-6 space-y-2">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
          {blog.title}
        </h3>
        <span className="text-xs dark:text-gray-600">
          {new Date(blog.published_at).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </span>
        <p>{blog.description}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
