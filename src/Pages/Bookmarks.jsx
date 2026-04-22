import React, { useEffect, useState } from "react";
import BlogCard from "../componets/BlogCard";
import { getBlogs } from "../utils";

const Bookmarks = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  }, []);
  return (
    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 py-6">
      {/* blog card */}
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog}></BlogCard>
      ))}
    </div>
  );
};

export default Bookmarks;
