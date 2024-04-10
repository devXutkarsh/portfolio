import React from "react";
import BlogCard from "./BlogCard";

function Blog() {
  return <div className="bg-black ">
    <h1 className=" text-4xl text-center">My Blog</h1>
    <div className="h-screen">
    <BlogCard />
   <BlogCard />

    </div>
  </div>;
}

export default Blog;
