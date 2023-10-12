"use client";
import { Blog } from "@/utils/types";
import React, { useEffect } from "react";
import SingleBlog from "../singleblog/SingleBlog";
import { useRouter } from "next/navigation";

const BlogList = ({ blog }: { blog: any }) => {
  const router = useRouter();
  useEffect(() => {
    router.refresh();
  }, []);

  async function handleDelete(id: number) {
    const post = await fetch(`/api/blog?id=${id}`, {
      method: "DELETE",
      cache: "no-store",
    });
    const data = await post.json();
    console.log(data);
  }
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 ">
        {blog.post.map((item: Blog) => (
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
