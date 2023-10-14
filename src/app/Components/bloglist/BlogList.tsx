"use client";
import { Blog } from "@/utils/types";
import React, { useEffect } from "react";
import SingleBlog from "../singleblog/SingleBlog";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";
const BlogList = ({ blog }: { blog: any }) => {
  const queryClient = useQueryClient();
  async function handleDelete(id: number) {
    try {
      const post = await axios.delete(`/api/blog?id=${id}`);
      console.log(post);
      queryClient.invalidateQueries({ queryKey: ["blog-data"] });
    } catch (error) {
      console.error("An error occurred while deleting the blog:", error);
    }
  }
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 ">
        {blog?.post.map((item: Blog) => (
          <SingleBlog
            blogItem={item}
            handleDelete={handleDelete}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
