import React from "react";
import BlogCard from "../BlogCard";
import { CiMenuFries } from "react-icons/ci";
import { Link } from "react-router-dom";

function BlogPage() {
  return (
    <div className="bg-black py-10">
      <Link to="/menu" className="mb-52">
        <div className="w-full py-5 px-4 text-white">
          <CiMenuFries className=" text-2xl" />
        </div>
      </Link>

      <h1 className="text-center text-3xl pt-2  text-white">MY Blogs</h1>
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  );
}

export default BlogPage;
